import React, { useContext, useEffect, useState } from 'react';
import { AdminContext } from '../../contexts/AdminContext';
import './ProductsOnMain.css';
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
import { Pagination } from '@material-ui/lab';
import { Link } from 'react-router-dom';

const ProductsOnMain = (props) => {

    const { getProductsData, products, addAndDeleteProductInCart, checkProductInCart,
        totalCount, addAndDeleteProductInFavorite } = useContext(AdminContext)

    const [page, setPage] = useState(1)
    useEffect(() => {
        getProductsData()
    }, [])

    function fetchParams(params, value) {
        let search = new URLSearchParams(props.history.location.search);
        search.set(params, value)
        let url = `${props.location.pathname}?${search.toString()}`
        props.history.push(url);
        getProductsData(1, '', props.history)
        setPage(1)
    }

    function pageCount() {
        return totalCount / 8;
    }

    function handleSearch(event) {
        getProductsData('', '', '', event.target.value)
    }

    function handlePagination(...args) {
        getProductsData(args[1])
        setPage(args[1])
    }

    // console.log(page)

    return (
        <div>
            <h2>Продукты</h2>
            <div className="filter-block">
                <input placeholder="Поиск" onChange={handleSearch} />
                <button value='all' onClick={(event) => fetchParams('type=', event.target.value)} >Все</button>
                <button value='Фрукты' onClick={(event) => fetchParams('type=', event.target.value)}>Фрукты</button>
                <button value='Овощи' onClick={(event) => fetchParams('type=', event.target.value)}>Овощи</button>
                <button value='Орехи' onClick={(event) => fetchParams('type=', event.target.value)}>Орехи</button>
                <button value="Зелень" onClick={(event) => fetchParams('type=', event.target.value)}>Зелень</button>
            </div>
            <div className="d-flex flex-wrap">
                {products.map(item => (
                    <div key={item.id} className="product-block-main col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-card col-lg-12">
                            <div className="favorite-block">
                                <HeartOutlined className="favorite-icon" onClick={() => addAndDeleteProductInFavorite(item)} />
                            </div>
                            <Link to={`details/${item.id}`}>
                                <div className="product-image-block">
                                    <img className="product-image" src={item.image} alt=""></img>
                                </div>
                            </Link>
                            <h4 className="title">{item.title}</h4>
                            <p className="type">{item.type}</p>
                            <p className="price">{item.price}с</p>
                            <button className="add-to-cart" onClick={() => addAndDeleteProductInCart(item)}> {checkProductInCart(item.id) ? "Добавлено" : 'В корзину'}<ShoppingCartOutlined /></button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination col-12">
                <Pagination style={{ margin: 'auto', marginTop: '30px', marginBottom: '70px' }} color={'primary'} page={page} count={Math.ceil(pageCount())} onChange={handlePagination} />
            </div>
        </div>
    );
};

export default ProductsOnMain;