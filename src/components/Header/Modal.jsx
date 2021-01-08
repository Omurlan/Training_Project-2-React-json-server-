import React, { useContext, useState } from 'react';
import { AdminContext } from '../../contexts/AdminContext';
import './Modal.css';

const Modal = () => {
    const { modalActive, setModalActive } = useContext(AdminContext);


    return (
        <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <div className="catalog-block">
                    <div className="catalog-card col-3">
                        <div>
                            <img src="https://static-sl.insales.ru/r/B4-8PYeQAvI/fit/500/500/ce/1/plain/images/products/1/3146/379440202/%D0%90%D0%B2%D0%BE%D0%BA%D0%B0%D0%B4%D0%BE.jpg@webp"></img>
                            <p>Овощи, фрукты и ягоды</p>
                        </div>
                    </div>
                    <div className="catalog-card col-3">
                        <div>
                            <img src="https://static-sl.insales.ru/r/R5mlf7a8MwY/fit/500/500/ce/1/plain/images/products/1/7876/380452548/%D0%94%D0%BE%D1%80%D0%B0%D0%B4%D0%BE__600_%D0%B3.jpg@webp"></img>
                        </div>
                    </div>
                    <div className="catalog-card col-3">
                        <div>
                            <img src="https://static-sl.insales.ru/r/yQDhfUIpDyI/fit/500/500/ce/1/plain/images/products/1/7370/379403466/%D0%9A%D1%80%D1%83%D0%B0%D1%81%D1%81%D0%B0%D0%BD_3-min.jpg@webp"></img>
                        </div>
                    </div>
                    <div className="catalog-card col-3">
                        <div>
                            <img src="https://static-sl.insales.ru/r/B4-8PYeQAvI/fit/500/500/ce/1/plain/images/products/1/3146/379440202/%D0%90%D0%B2%D0%BE%D0%BA%D0%B0%D0%B4%D0%BE.jpg@webp"></img>
                        </div>
                    </div>
                    <div className="catalog-card col-3">
                        <div>
                            <img src="https://static-sl.insales.ru/r/uDeELjAsBqk/fit/500/500/ce/1/plain/images/products/1/3940/380415844/%D0%9A%D1%83%D1%80%D0%B8%D0%BD%D0%BD%D1%8B%D0%B5_%D0%B3%D1%80%D1%83%D0%B4%D0%BA%D0%B8__1_%D0%BA%D0%B3.jpg@webp"></img>
                        </div>
                    </div>
                    <div className="catalog-card col-3">
                        <div>
                            <img src="https://static-sl.insales.ru/r/aaBi_0LhnX8/fit/500/500/ce/1/plain/images/products/1/4993/380457857/%D0%9C%D0%BE%D0%BB%D0%BE%D0%BA%D0%BE__1_%D0%BB.jpg@webp"></img>
                        </div>
                    </div>
                    <div className="catalog-card col-3">
                        <div>
                            <img src="https://static-sl.insales.ru/r/5olusI5kE8s/fit/500/500/ce/1/plain/images/products/1/2339/380438819/%D0%A1%D0%BE%D0%BA_%D0%B0%D0%BF%D0%B5%D0%BB%D1%8C%D1%81%D0%B8%D0%BD__1_%D0%BB.jpg@webp"></img>
                        </div>
                    </div>
                    <div className="catalog-card col-3">
                        <div>
                            <img src="https://static-sl.insales.ru/r/1NnuvyltJ0Y/fit/500/500/ce/1/plain/images/products/1/1707/380429995/%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B9_%D1%87%D0%B0%D0%B9_%D1%81_%D0%B6%D0%B0%D1%81%D0%BC%D0%B8%D0%BD%D0%BE%D0%BC__100_%D0%B3.jpg@webp"></img>
                        </div>
                    </div>
                    <div className="catalog-card col-3">
                        <div>
                            <img src="https://static-sl.insales.ru/r/U48ZZl7j16g/fit/500/500/ce/1/plain/images/products/1/7824/379428496/%D0%A4%D1%83%D0%BD%D0%B4%D1%83%D0%BA_%D0%BE%D1%87%D0%B8%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9.jpg@webp"></img>
                        </div>
                    </div>
                    <div className="catalog-card col-3">
                        <div>
                            <img src="https://static-sl.insales.ru/r/K9-AXC-FmHY/fit/500/500/ce/1/plain/images/products/1/2626/379398722/%D0%91%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8_%D1%81_%D0%BC%D0%B0%D0%BA%D0%BE%D0%BC-min.jpg@webp"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;