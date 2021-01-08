import React, { useContext } from 'react';
import { SearchOutlined, UserOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import './Header.css';
import { Link } from 'react-router-dom';
import { AdminContext } from '../../contexts/AdminContext';
import Modal from './Modal';

const Header = () => {
    const { setModalActive, productsCountInCart, productsCountInFavorite } = useContext(AdminContext);


    return (
        <div className="header-block">
            <Modal />
            <div className="header-background">
                <Link to="/Admin">
                    <h5 className="container pt-2">AddProduct</h5>
                </Link>
                <div className="header-part-top col-lg-12">
                    <div className="left-side col-lg-7">
                        <button href="sdfs">Каталог</button>
                        <button href="fdsf">О компании</button>
                        <button href="sdsf">Контакты</button>
                        <button href="sdgf">Доставка</button>
                        <button href="sdf">Оплата</button>
                        <button href="sdf">Личный кабинет</button>
                        <button href="sdf">Блог</button>
                    </div>
                    <div className="right-side col-lg-5">
                        <p>Доставка с 8:00 до 23:00</p>
                        {/* <a href="tel: +7(800) 800-80-80">+7(800) 800-80-80</a> */}
                        <Link to="/signin">
                            <p className="auth">Войти</p>
                        </Link>
                        <Link to="/signup">
                            <p className="auth">Регистрация</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="header-part-main col-lg-12">
                <div className="logo-block col-lg-3">
                    <img src="https://static-sl.insales.ru/files/1/1171/14550163/original/markom_logo.svg" alt=""></img>
                </div>
                <div className="catalog-block col-lg-2 col-sm-12" >
                    <div className="catalog-block__inner" onClick={() => setModalActive(true)}>
                        <span className="line"></span>
                        <p>Каталог</p>
                    </div>
                </div>
                <div className="search-block col-4 ">
                    <input placeholder="Поиск" />
                    <div className="search-icon-block">
                        <SearchOutlined className="search-icon" />
                    </div>
                </div>
                <div className="options col-3">
                    <Link to="/favorite">
                        <HeartOutlined />
                        <span>{productsCountInFavorite}</span>
                    </Link>
                    <UserOutlined />
                    <Link to="/cart">
                        <span>{productsCountInCart}</span>
                        {/* <p>{productsTotalPrice}</p> */}
                        <ShoppingCartOutlined />
                        {/* <p className="total-price">{cartData.totalPrice}с</p> */}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;