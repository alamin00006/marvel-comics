import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import slide1 from '../../../images/slide1.jpg'
import './Banner.css'
const Banner = () => {
    let menuRef = useRef();
    return (
        <div>
            <Swiper 
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                cssMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                  }}
                mousewheel={true}
                keyboard={true}
                autoplay ={true}
                className="mySwiper">
             <SwiperSlide>
                 <div className='slider'>
                     <img src={slide1} alt=''/>
                 </div>
             </SwiperSlide>
             <SwiperSlide>
                 <div className='slider'>
                     <img src={slide1} alt=''/>
                 </div>
             </SwiperSlide>
             <SwiperSlide>
                 <div className='slider'>
                     <img src={slide1} alt=''/>
                 </div>
             </SwiperSlide>
             <SwiperSlide>
                 <div className='slider'>
                     <img src={slide1} alt=''/>
                 </div>
             </SwiperSlide>
             <SwiperSlide>
                 <div className='slider'>
                     <img src={slide1} alt=''/>
                 </div>
             </SwiperSlide>
            </Swiper> 
        </div>
    );
};

export default Banner;