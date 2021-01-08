import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../contexts/AdminContext';
import Header from '../Header/Header';
import './Favorite.css';

const Favorite = () => {
    const { favoriteData, getFavorite, deleteFromFavorite, checkProductInCart, addAndDeleteProductInCart } = useContext(AdminContext)

    useEffect(() => {
        getFavorite()
    }, [])


    return (
        <div>
            <Header />
            <div className="cart">
                {favoriteData.products && favoriteData != false ? (
                    <div className="col-sm-12 col-md-10 col-lg-9 col-xl-8">
                        <h3>Типо избранные</h3>
                        {favoriteData.products.map(item => (
                            <div key={item.product.id} className="product-block col-lg-12">
                                <img src={item.product.image} alt=""></img>
                                <div className="col-lg-12">
                                    <h5>{item.product.title}, {item.product.priceFor}</h5>
                                    <button className="delete-from-cart col-lg-12" onClick={() => deleteFromFavorite(item.product.id)}>Удалить</button>
                                    <button className="add-to-cart col-lg-2" onClick={() => addAndDeleteProductInCart(item.product)}>{checkProductInCart(item.product.id) ? "Добавлено" : 'В корзину'}</button>
                                </div>
                                <div className="col-lg-12">
                                </div>
                            </div>
                        ))}
                    </div>
                ) : <h1>Тут пусто</h1>}
            </div>
        </div>
    );
};

export default Favorite;
