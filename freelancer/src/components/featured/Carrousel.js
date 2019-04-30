import React from 'react';
import Slider from "react-slick";

import image1 from '../../resources/images/image1.jpeg';
import image2 from '../../resources/images/image2.jpeg';
import image3 from '../../resources/images/image3.jpg';


const carousel = () => {

    const settings={
        dots:false,
        infinite: true,
        autoplay:true,
        speed:500
    }

    return (
        <div
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`,
                overflow:"hidden"
            }}
        >
            <Slider{...settings}>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${image1})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>
                </div>
                <div>
                     <div 
                     className="carrousel_image"
                     style={{
                         background:`url(${image2})`,
                         height:`${window.innerHeight}px`
                     }}
                 ></div>
                ></div>
                <div>
                <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${image3})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>
                </div>
            </Slider>
        </div>
    );
};

export default carousel;