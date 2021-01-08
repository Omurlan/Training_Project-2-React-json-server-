import React, { useContext, useEffect, useState } from 'react';
import { AdminContext } from '../../contexts/AdminContext';
import './EditProduct.css';

const EditProduct = (props) => {
    const { productToEdit, saveProduct } = useContext(AdminContext)
    const [newEditProduct, setNewEditProduct] = useState(productToEdit)

    useEffect(() => {
        setNewEditProduct(productToEdit)
    }, [productToEdit])

    function handleInputsValue(event) {
        const obj = {
            ...newEditProduct,
            [event.target.name]: event.target.value
        }
        setNewEditProduct(obj)
    }

    return (
        <div>
            {newEditProduct ? (
                <div className="add-product-block col-lg-5 col-md-5 col-sm-7 col-9">
                    <input
                        name="image"
                        onChange={handleInputsValue}
                        value={newEditProduct.image}
                        placeholder="Изображение"
                    />
                    <input
                        name="title"
                        onChange={handleInputsValue}
                        value={newEditProduct.title}
                        placeholder="Название продукта"
                    />
                    <input
                        name="price"
                        onChange={handleInputsValue}
                        value={newEditProduct.price}
                        placeholder="Цена"
                    />
                    <div className="admin-select-block">
                        <select name="priceFor" onChange={handleInputsValue} value={newEditProduct.priceFor}>
                            <option value="" disabled selected>Цена за...</option>
                            <option>1 кг</option>
                            <option>100 г</option>
                            <option>1 шт</option>
                        </select>
                        <select name="type" onChange={handleInputsValue} value={newEditProduct.type}>
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
                    <button onClick={() => saveProduct(newEditProduct, props.history)}>Сохранить</button>
                </div>
            ) : <h1>Hello</h1>}
        </div>
        //     <div >
        //     <div className="add-product-block col-lg-5 col-md-5 col-sm-7 col-9">
        //         <input
        //             name="image"
        //             placeholder="Изображение"
        //             onChange={handleInputsValue}
        //             value={product.image}
        //         />
        //         <input
        //             name="title"
        //             placeholder="Название продукта"
        //             onChange={handleInputsValue}
        //             value={product.title}
        //         />
        //         <input
        //             name="price"
        //             placeholder="Цена"
        //             type="number"
        //             onChange={handleInputsValue}
        //             value={product.price}
        //         />
        //         <div className="admin-select-block">
        //             <select name="priceFor" onChange={handleInputsValue} value={product.priceFor}>
        //                 <option value="" disabled selected>Цена за...</option>
        //                 <option>1 кг</option>
        //                 <option>100 г</option>
        //                 <option>1 шт</option>
        //             </select>
        //             <select name="type" onChange={handleInputsValue} value={product.type}>
        //                 <option value="" disabled selected>Тип продукта</option>
        //                 <option>Овощи</option>
        //                 <option>Фрукты</option>
        //                 <option>Зелень</option>
        //                 <option>Морепродукты</option>
        //                 <option>Соки</option>
        //                 <option>Орехи</option>
        //                 <option>Десерты</option>
        //             </select>
        //         </div>
        //         <button onClick={handleClick}>Добавить товар</button>
        //     </div>
        // </div>
    );
};

export default EditProduct;