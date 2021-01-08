import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { AdminContext } from '../../contexts/AdminContext';
import './AddProduct.css';

const AddProduct = () => {
    const { addNewProduct } = useContext(AdminContext)
    const [product, setProduct] = useState({
        image: '',
        title: '',
        price: '',
        priceFor: '',
        type: '',
        comments: []
    })


    function handleInputsValue(event) {
        console.log(product)
        const obj = {
            ...product,
            [event.target.name]: event.target.value
        }
        setProduct(obj)
    }

    function handleClick() {
        if (!product.image || !product.title || !product.price || !product.priceFor || !product.type) {
            alert('Выйди и заполни нормально !')
        }
        addNewProduct(product)
        const newObj = {
            image: '',
            title: '',
            price: '',
            priceFor: '',
            type: '',  
        }
        setProduct(newObj)


    }

    return (
        <div >
            <div className="add-product-block col-lg-5 col-md-5 col-sm-7 col-9">
                <input
                    name="image"
                    placeholder="Изображение"
                    onChange={handleInputsValue}
                    value={product.image}
                />
                <input
                    name="title"
                    placeholder="Название продукта"
                    onChange={handleInputsValue}
                    value={product.title}
                />
                <input
                    name="price"
                    placeholder="Цена"
                    type="number"
                    onChange={handleInputsValue}
                    value={product.price}
                />
                <div className="admin-select-block">
                    <select name="priceFor" onChange={handleInputsValue} value={product.priceFor}>
                        <option value="" disabled selected>Цена за...</option>
                        <option>1 кг</option>
                        <option>100 г</option>
                        <option>1 шт</option>
                    </select>
                    <select name="type" onChange={handleInputsValue} value={product.type}>
                        <option value="" disabled selected>Тип продукта</option>
                        <option>Овощи</option>
                        <option>Фрукты</option>
                        <option>Зелень</option>
                        <option>Морепродукты</option>
                        <option>Соки</option>
                        <option>Орехи</option>
                        <option>Десерты</option>
                    </select>
                </div>
                <button onClick={handleClick}>Добавить товар</button>
            </div>
        </div>
    );
};

export default AddProduct;