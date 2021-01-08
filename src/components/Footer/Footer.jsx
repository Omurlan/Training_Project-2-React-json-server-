import React from 'react';
import './Footer.css';
import { FacebookOutlined, TwitterOutlined, YoutubeOutlined, InstagramOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <div className="footer-background">
            <div className="block-container">
                <div className="footer col-lg-12">
                    <div className="footer-left-side col-lg-8 col-md-12">
                        <div>
                            <h5>Верхнее меню</h5>
                            <ul>
                                <li>Каталог</li>
                                <li>О компании</li>
                                <li>Контакты</li>
                                <li>Доставка</li>
                                <li>Оплата</li>
                                <li>Личный кабинет</li>
                                <li>Блог</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Покупателям</h5>
                            <ul>
                                <li>Личный кабинет</li>
                                <li>Мои заказы</li>
                                <li>Вопросы и ответы</li>
                                <li>Политика возврата</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Информация</h5>
                            <ul>
                                <li>Политика конфиденциальности и оферта</li>
                                <li>Пользовательское соглашение</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-right-side col-lg-3 col-md-12">
                        <h5>Мы в соц.сетях</h5>
                        <div className="links-icon">
                            <FacebookOutlined style={{ marginRight: '20px' }} />
                            <TwitterOutlined style={{ marginRight: '20px' }} />
                            <YoutubeOutlined style={{ marginRight: '20px' }} />
                            <InstagramOutlined style={{ marginRight: '20px' }} />
                        </div>
                        <h4>+7(800) 800-80-80</h4>
                        <p>Справочная служба</p>
                        <h4>+7(800) 800-80-80</h4>
                        <p>Интернет магазин</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;