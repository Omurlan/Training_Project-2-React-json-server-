import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import ProductsList from '../ProductsList/ProductsList';

const AdminHome = () => {
    return (
        <div>
            <AddProduct/>
            <ProductsList/>
        </div>
    );
};

export default AdminHome;