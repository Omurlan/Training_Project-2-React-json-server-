import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminHome from './components/AdminHome/AdminHome';
import Cart from './components/Cart/Cart';
import EditProduct from './components/EditProduct/EditProduct';
import Home from './components/Home/Home';
import ProductsDetails from './components/ProductsOnMain/ProductsDetails';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import AdminContextProvider from './contexts/AdminContext';
import AuthContextProvider from './contexts/AuthContext';
import Favorite from './components/Favorite/Favorite';
import CreditCard from './components/Payment/CreditCard';

const Routes = () => {
    return (
        <AdminContextProvider>
            <BrowserRouter>
                <AuthContextProvider>
                    <Switch>
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/signin" component={SignIn} />
                    </Switch>
                </AuthContextProvider>
                <Switch>
                    <Route exact path="/admin" component={AdminHome} />
                    <Route exact path="/edit" component={EditProduct} />
                </Switch>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/details/:id" component={ProductsDetails} />
                    <Route exact path="/favorite" component={Favorite} />
                    <Route exact path="/payment" component={CreditCard} />
                    <Route exact path="/cart" component={Cart} />
                </Switch>
            </BrowserRouter>
        </AdminContextProvider>
    );
};

export default Routes;