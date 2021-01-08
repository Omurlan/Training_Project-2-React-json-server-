import React from 'react';
import ProductsCarousel from '../Carousel/ProductsCarousel';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProductsOnMain from '../ProductsOnMain/ProductsOnMain';
import WidgetBanners from '../WidgetBanners/WidgetBanners';

const Home = (props) => {
    return (
        <div>
            <Header {...props} />
            <div className="block-container">
                <ProductsCarousel />
                <ProductsOnMain {...props} />
                <WidgetBanners />
            </div>
            <Footer />
        </div>
    );
};

export default Home;