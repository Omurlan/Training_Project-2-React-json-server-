import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductsCarousel = () => {
    return (
        <Carousel className="col-12" infiniteLoop autoPlay transitionTime="1000" interval="6000" showThumbs={false} stopOnHover={false} showStatus={false}>
            <div>
                <img src="https://static-sl.insales.ru/r/nlEYOkOZekE/fit/1408/0/ce/1/plain/files/1/2110/14641214/original/slider.jpg@webp" alt=""></img>
            </div>
            <div>
                <img src="https://static-sl.insales.ru/r/nlEYOkOZekE/fit/1408/0/ce/1/plain/files/1/2110/14641214/original/slider.jpg@webp" alt=""></img>
            </div>
            <div>
                <img src="https://static-sl.insales.ru/r/nlEYOkOZekE/fit/1408/0/ce/1/plain/files/1/2110/14641214/original/slider.jpg@webp" alt=""></img>
            </div>
         </Carousel>   
    );
};

export default ProductsCarousel;
