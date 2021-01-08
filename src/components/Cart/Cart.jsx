import { Link } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../contexts/AdminContext';
import { calcSubPrice, calcTotalPrice } from '../../helpers/calcPrice';
import Header from '../Header/Header';
import './Cart.css';

const Cart = () => {
    const { cartData, getCart, changeCountProducts, deleteFromCart } = useContext(AdminContext)

    useEffect(() => {
        getCart()
    }, [])

    function handleChangeCount(event, id) {
        changeCountProducts(event.target.value, id)
    }

    return (
        <div>
            <Header />
            <div className="cart">
                {!cartData || !cartData.products !== true ? (
                    <div className="col-sm-12 col-md-10 col-lg-9 col-xl-8">
                        <h3>Корзина</h3>
                        {cartData.products.map(item => (
                            <div key={item.product.id} className="product-block col-lg-12">
                                <img src={item.product.image} alt=""></img>
                                <div className="col-lg-12">
                                    <h5>{item.product.title}, {item.product.priceFor}</h5>
                                    <div className="count-button-block p-0">
                                        <button value={++item.count} onClick={(event) => handleChangeCount(event, item.product.id)}>+</button>
                                        <p>{--item.count}</p>
                                        <button value={item.count !== 1 ? --item.count : item.count} onClick={(event) => handleChangeCount(event, item.product.id)}>-</button>
                                    </div>
                                    <div className="product__cost">
                                        <p className="cost">{calcSubPrice(item)}c</p>
                                    </div>
                                    <button className="delete-from-cart col-lg-12" onClick={() => deleteFromCart(item.product.id)}>Удалить</button>
                                </div>
                            </div>
                        ))}
                        <h4>Всего {calcTotalPrice(cartData.products)}</h4>
                        <Link to="/payment" style={{ color: 'black' }}>
                            <button className="payment-button">Оплатить</button>
                        </Link>
                    </div>
                ) : <h1>Корзина пуста</h1>}
            </div>
        </div>
    );
};

export default Cart;