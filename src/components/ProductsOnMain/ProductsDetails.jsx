import React, { useContext, useEffect, useState } from 'react';
import { AdminContext } from '../../contexts/AdminContext';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ProductsDetails.css';

const ProductsDetails = (props) => {
    const { getProductsDetails, productDetails, addAndDeleteProductInCart, checkProductInCart, addComments } = useContext(AdminContext);

    const [comment, setComment] = useState({
        nickname: '',
        text: ''
    })

    function handleInputsValue(event) {
        let obj = {
            ...comment,
            [event.target.name]: event.target.value
        }
        setComment(obj)
    }

    function handleClick() {
        let obj = { ...productDetails }
        obj.comments.push(comment)
        addComments(obj)
        const newObj = {
            nickname: '',
            text: ''
        }
        setComment(newObj)
    }


    useEffect(() => {
        getProductsDetails(props.match.params.id)
    }, [])

    return (
        <div>
            <Header />
            <div className="block-container">
                {productDetails ? (
                    <div>
                        <div className="details-block">
                            <div className="details-left-side col-lg-6 col-md-10">
                                <img className="details-image col-lg-12 col-md-9 col-sm-9 " src={productDetails.image} />
                            </div>
                            <div className="details-right-side col-lg-6 col-md-12">
                                <div className="details-title">
                                    {productDetails.title},
                                    {productDetails.priceFor}
                                </div>
                                <div className="details-right-block col-sm-12">
                                    <p>{productDetails.price}с</p>
                                    <div className="cart-block col-lg-5 col-md-5 col-sm-12 p-0">
                                        <button className="details-add-to-cart" onClick={() => addAndDeleteProductInCart(productDetails)}> {checkProductInCart(productDetails.id) ? "Добавлено" : 'В корзину'}<ShoppingCartOutlined /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="description-block">
                                <div className="comments-block">
                                    <h5>Оставить отзыв</h5>
                                    <input
                                        name="nickname"
                                        onChange={handleInputsValue}
                                        type="text"
                                        placeholder="Name"
                                        value={comment.nickname}
                                    />
                                    <textarea
                                        className="area"
                                        name="text"
                                        onChange={handleInputsValue}
                                        type="text"
                                        placeholder="Comment"
                                        value={comment.text}
                                    >
                                    </textarea>
                                    <button onClick={handleClick}>Отправить</button>
                                    <div className="comments__list">
                                        {productDetails.comments.map(item => (
                                            <div key={item.id} className="comments-list-block col-10">
                                                <div className="user__icon">
                                                    <img src="https://icon-library.com/images/funny-icon/funny-icon-19.jpg"></img>
                                                </div>
                                                <div className="comment__item">
                                                    <li>{item.nickname}</li>
                                                    <li>{item.text}</li>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : <h1>Загрузка</h1>}
            </div>
            <Footer />
        </div>
    );
};

export default ProductsDetails;