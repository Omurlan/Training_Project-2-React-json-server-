import React from 'react';
import './WidgetBanners.css';

const WidgetBanners = () => {
    return (
        <div>
            <div className="widget-block col-12 d-flex">
                <div className="col-lg-6 col-12 pl-lg-0 pr-lg-2 pl-md-0 pr-md-0">
                    <div className="first-widget">
                        <img src="https://static-sl.insales.ru/r/J031_fXLeuA/fit/700/700/ce/1/plain/files/1/6822/14351014/original/%D0%A4%D0%BE%D1%82%D0%BE__1_.jpg@webp" alt=""></img>
                    </div>
                    <p>Торты, десерты, сладкая выпечка</p>
                </div>
                <div className="col-lg-6 col-12 pr-lg-0 pl-lg-2 pl-md-0 pr-md-0">
                    <div className="second-widget">
                        <img src="https://static-sl.insales.ru/r/AHSDj8COB6c/fit/700/700/ce/1/plain/files/1/6845/14351037/original/%D0%A4%D0%BE%D1%82%D0%BE__2_.jpg@webp" alt=""></img>
                    </div>
                    <p>Рыба, икра, морепродукты</p>
                </div>
            </div>
            <div className="second-widget-block d-flex">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="banner">
                        <img className="col-lg-12" src="https://static-sl.insales.ru/r/_Z0YfnhntIY/fit/700/700/ce/1/plain/files/1/6949/14351141/original/%D0%A4%D0%BE%D1%82%D0%BE__5_.jpg@webp" alt=""></img>
                    </div>
                    <p>Баннер 1</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="banner">
                        <img className="col-lg-12" src="https://static-sl.insales.ru/r/qjYN3Z6W0hc/fit/700/700/ce/1/plain/files/1/6962/14351154/original/%D0%A4%D0%BE%D1%82%D0%BE__6_.jpg@webp" alt=""></img>
                    </div>
                    <p>Баннер 2</p>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="banner">
                        <img className="col-lg-12" src="https://static-sl.insales.ru/r/vHc1t8Sg2Vw/fit/700/700/ce/1/plain/files/1/6988/14351180/original/%D0%A4%D0%BE%D1%82%D0%BE__7_.jpg@webp" alt=""></img>
                    </div>
                    <p>Баннер 3</p>
                </div>
            </div>
        </div>
    );
};

export default WidgetBanners;