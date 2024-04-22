import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Swiper1() {
  return (
    <>
            <Swiper
        spaceBetween={30}
      
        centeredSlides={false}
        loop={true}
        breakpoints={{
          992: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-3 md:mt-0 relative d-md-col"
  
      >
              <i className="fa-solid fa-quote-left absolute top-[-15px] left-[0px] text-[#766df4] text-[80px] z-50 hidden lg:block"></i>
        <SwiperSlide>
          <img className='w-full h-full mx-auto'  src="https://themesdesign.in/jobcy-react/layout/assets/images/home/img-02.png" alt="" />

          <div className=' absolute bottom-8'>
            <h2 className=' font-normal text-white text-[23.5px] md:text-[30px]'>" It looks perfect on all major browsers, tablets, and mobile devices."</h2>
            <h6 className="text-white text-[14px] md:text-[15px] font-bold py-2">- MichaeL Drake</h6>
          </div>
         
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-full mx-auto'  src="https://themesdesign.in/jobcy-react/layout/assets/images/home/img-03.png" alt="" />

              <div className=' absolute bottom-8'>
                <h2 className=' font-normal text-white text-[23.5px] md:text-[30px]'>" This template is well organized and very easy to customize. "</h2>
                <h6 className="text-white text-[14px] md:text-[15px] font-bold py-2">- Charles Dikens</h6>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full h-full mx-auto'  src="https://themesdesign.in/jobcy-react/layout/assets/images/home/img-04.png" alt="" />

          <div className=' absolute bottom-8'>
            <h2 className=' font-normal text-white text-[23.5px] md:text-[30px]'>" All your client websites if you are an agency or freelancer. "</h2>
            <h6 className="text-white text-[14px] md:text-[15px] font-bold py-2">- Rebecca Swartz</h6>
          </div>
        </SwiperSlide>
       
    
      </Swiper>

    </>
  )
}

export default Swiper1