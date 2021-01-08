import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { calcSubPrice, calcTotalPrice } from '../helpers/calcPrice';
import { JSON_API } from '../helpers/constants';

export const AdminContext = React.createContext();

const INIT_STATE = {
    products: [],
    productToEdit: null,
    productDetails: null,
    productsCountInCart: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).products.length : 0,
    productsCountInFavorite: JSON.parse(localStorage.getItem('favorite')) ? JSON.parse(localStorage.getItem('favorite')).products.length : 0,
    cartData: {},
    favoriteData: {},
    totalCount: 0,
    comments: [],
    modalActive: false
}

function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case 'GET_PRODUCTS_DATA':
            return { ...state, products: action.payload }
        case "EDIT_PRODUCT":
            return { ...state, productToEdit: action.payload }
        case "ADD_AND_DELETE_IN_CART":
            return { ...state, productsCountInCart: action.payload }
        case "GET_CART":
            return { ...state, cartData: action.payload }
        case 'ADD_AND_DELETE_IN_FAVORITE':
            return { ...state, productsCountInFavorite: action.payload }
        case 'GET_FAVORITE':
            return { ...state, favoriteData: action.payload }
        case "GET_PRODUCTS_DETAILS":
            return { ...state, productDetails: action.payload }
        case 'ADD_COMMENT':
            return { ...state, comments: action.payload }
        case "SET_MODAL":
            return { ...state, modalActive: action.payload }
        case 'SET_TOTAL_COUNT':
            return { ...state, totalCount: action.payload }
        default:
            return state
    }
}

const AdminContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    // Модальное окно
    function setModalActive(x) {
        dispatch({
            type: "SET_MODAL",
            payload: x
        })
    }

    // Комментарии
    async function addComments(newObj) {
        const { data } = await axios.patch(`${JSON_API}/products/${newObj.id}`, newObj)
    }

    // Добавляем данные
    async function addNewProduct(newProduct) {
        await axios.post(`${JSON_API}/products`, JSON.stringify(newProduct))
        getProductsData()
    }

    // console.log(`${JSON_API}/products.json`)

    // Получаем данные//Поиск, фильтрация, пагинация
    async function getProductsData(page = 1, search = '', a, input = '') {
        let params = window.location.search.replace(/%3D/g, '')
        if (params === '?type=all') params = ''
        let req = '&'
        if (params === '') req = '?'
        let searchReq = '&q='
        if (input === '') searchReq = ''
        let limit = '&_limit=8'
        const countProduct = await axios(`${JSON_API}/products`)
        if (window.location.href === 'http://localhost:3000/Admin') limit = String(`&_limit=${countProduct.data.length}`)
        const { data, headers } = await axios(`${JSON_API}/products${params}${req}_page=${page}${limit}${searchReq}${input}`)
        dispatch({
            type: 'GET_PRODUCTS_DATA',
            payload: data
        })
        dispatch({
            type: 'SET_TOTAL_COUNT',
            payload: headers["x-total-count"]
        })
    }

    // Удаляем данные
    async function deleteProduct(id) {
        await axios.delete(`${JSON_API}/products/${id}`)
        getProductsData()
    }

    // Удаляем из корзины
    function deleteFromCart(id) {
        let cart = JSON.parse(localStorage.getItem('cart'))
        cart.products = cart.products.filter(item => item.product.id != id)
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch({
            type: 'ADD_AND_DELETE_IN_CART',
            payload: cart.products.length
        })
        getCart()
    }

    // Удаляем из избранных
    function deleteFromFavorite(id) {
        let favorite = JSON.parse(localStorage.getItem('favorite'))
        favorite.products = favorite.products.filter(item => item.product.id != id)
        localStorage.setItem('favorite', JSON.stringify(favorite))
        dispatch({
            type: 'ADD_AND_DELETE_IN_FAVORITE',
            payload: favorite.products.length
        })
        getFavorite()
    }

    // Изменяем данные
    async function editProduct(id) {
        const { data } = await axios(`${JSON_API}/products/${id}`)
        dispatch({
            type: 'EDIT_PRODUCT',
            payload: data
        })
    }

    // Сохраняем данные
    async function saveProduct(newProduct, history) {
        await axios.patch(`${JSON_API}/products/${newProduct.id}`, newProduct)
        history.push('/Admin')
    }


    // Избранные
    function addAndDeleteProductInFavorite(product) {
        let favorite = JSON.parse(localStorage.getItem('favorite'))
        if (!favorite) {
            favorite = {
                products: []
            }
        }
        let newProduct = {
            product: product,
            count: 1,
        }
        let newFavorite = favorite.products.filter(item => item.product.id === product.id)
        if (newFavorite.length > 0) {
            favorite.products = favorite.products.filter(item => item.product.id !== product.id)
        } else {
            favorite.products.push(newProduct)
        }

        localStorage.setItem('favorite', JSON.stringify(favorite))

        dispatch({
            type: 'ADD_AND_DELETE_IN_FAVORITE',
            payload: favorite.products.length
        })
    }

    function getFavorite() {
        let favorite = JSON.parse(localStorage.getItem('favorite'))
        dispatch({
            type: 'GET_FAVORITE',
            payload: favorite
        })
    }

    function checkProductInFavorite(id) {
        let favorite = JSON.parse(localStorage.getItem('favorite'))
        if (!favorite) {
            favorite = {
                products: []
            }
        }
        let newFavorite = favorite.products.filter(item => item.product.id === id)
        return newFavorite.length > 0 ? true : false
    }

    function changeCountProductsFavorite(count, id) {
        let favorite = JSON.parse(localStorage.getItem('favorite'))
        favorite.products = favorite.products.map(item => {
            if (item.product.id === id) {
                item.count = count
            }
            return item
        })
        localStorage.setItem('favorite', JSON.stringify(favorite))
        getFavorite()
    }


    // Корзина
    function addAndDeleteProductInCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0
            };
        }
        let newProduct = {
            product: product,
            count: 1,
            subPrice: 0
        }
        newProduct.subPrice = calcSubPrice(newProduct)
        let newCart = cart.products.filter(item => item.product.id === product.id)
        if (newCart.length > 0) {
            cart.products = cart.products.filter(item => item.product.id !== product.id)
        } else {
            cart.products.push(newProduct)
        }
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart))

        dispatch({
            type: 'ADD_AND_DELETE_IN_CART',
            payload: cart.products.length
        })
    }

    function checkProductInCart(id) {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        let newCart = cart.products.filter(item => item.product.id === id)
        return newCart.length > 0 ? true : false
    }

    function getCart() {
        let cart = JSON.parse(localStorage.getItem('cart'))
        dispatch({
            type: 'GET_CART',
            payload: cart
        })
    }

    function changeCountProducts(count, id) {
        let cart = JSON.parse(localStorage.getItem('cart'))
        cart.products = cart.products.map(item => {
            if (item.product.id === id) {
                item.count = count
                item.subPrice = calcSubPrice(item)
            }
            return item
        })
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart))
        getCart()
    }

    // Детали
    async function getProductsDetails(id) {
        const { data } = await axios(`${JSON_API}/products/${id}`)
        dispatch({
            type: 'GET_PRODUCTS_DETAILS',
            payload: data
        })
    }

    return (
        <AdminContext.Provider value={{
            products: state.products,
            productDetails: state.productDetails,
            productsCountInCart: state.productsCountInCart,
            productsCountInFavorite: state.productsCountInFavorite,
            productToEdit: state.productToEdit,
            cartData: state.cartData,
            favoriteData: state.favoriteData,
            totalCount: state.totalCount,
            comments: state.comments,
            modalActive: state.modalActive,
            setModalActive,
            addNewProduct,
            getProductsData,
            getProductsDetails,
            getFavorite,
            checkProductInFavorite,
            changeCountProductsFavorite,
            editProduct,
            saveProduct,
            deleteProduct,
            deleteFromCart,
            deleteFromFavorite,
            addAndDeleteProductInCart,
            addAndDeleteProductInFavorite,
            checkProductInCart,
            getCart,
            changeCountProducts,
            addComments
        }}>
            { children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;