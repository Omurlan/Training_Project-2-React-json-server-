import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminContext } from '../../contexts/AdminContext';
import { JSON_API } from '../../helpers/constants';
import './ProductsList.css';

const ProductsList = () => {
    const { getProductsData, products, deleteProduct, editProduct } = useContext(AdminContext)

    useEffect(() => {
        getProductsData()
    }, [])

    console.log(products)

    return (
        <div className="block-container mt-5">
            <h2>Товары на сайте</h2>
            <div className="admin-product-block ">
                {products.map(item => (
                    <div key={item.id} className="admin-product-cart col-lg-3 col-md-4 col-sm-6 col-12">
                        <img src={item.image} alt="Здесь было изображение" className="col-lg-12"></img>
                        <div className="d-flex">
                            <h3>{item.title}, {item.priceFor}</h3>
                        </div>
                        <p>{item.type}</p>
                        <p>Цена: {item.price} сом</p>
                        <div className="admin-product-button-block">
                            <button onClick={() => deleteProduct(item.id)}>Удалить</button>
                            <Link to="/edit">
                                <button onClick={() => editProduct(item.id)}>Редактировать</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsList;