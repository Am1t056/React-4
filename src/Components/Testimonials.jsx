import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Testimonials() {
  return (
    <div className='container-fluid bg-[#f1f0fe] '>
    <div className='container'>
        <div className="row flex justify-center">
            <div className="col-lg-7">
                     <div className='section-title text-center py-3'>
                        <h4 className='title text-[#495057] text-[30px] mt-8 font-medium'>Happy Candidates</h4>
                        <p className=' text-muted text-[15px] py-2'>Post a job to tell us about your project. We'll quickly match you with the right freelancers.</p>

                        
                    </div>
            </div>
        </div>
        <div className="row flex justify-center items-center mt-3">
            <div className="col-lg-7">
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mb-3"
      >
        <SwiperSlide>
       <div className="card testi-box border-none bg-[#f1f0fe]">
  <div className="card-body py-5 bg-[#f1f0fe]">
    <div className="mb-4">
      <img className='w-[200px] h-[50px] mx-auto' src="https://themesdesign.in/jobcy-react/layout/assets/images/logo/instagram.svg" width={12} height={10}  />
    </div>
    <p className="testi-content lead text-muted mb-4">" Very well thought out and articulate communication.
      Clear milestones, deadlines and fast work. Patience. Infinite patience. No
      shortcuts. Even if the client is being careless. "</p>
    <h5 className="mb-0 text-[18.5px]">Charles Dickens</h5>
    <p className="text-muted mb-0">Store Assistant</p>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>

        <div className="card testi-box border-none bg-[#f1f0fe]">
  <div className="card-body py-5">
    <div className="mb-4">
      <img className='w-[200px] h-[50px] mx-auto' src="https://themesdesign.in/jobcy-react/layout/assets/images/logo/wordpress.svg" />
    </div>
    <p className="testi-content lead text-muted mb-4">" Very well thought out and articulate communication.
      Clear milestones, deadlines and fast work. Patience. Infinite patience. No
      shortcuts. Even if the client is being careless. "</p>
    <h5 className="mb-0 text-[18.5px]">Rebecca Swartz</h5>
    <p className="text-muted mb-0">Store Assistant</p>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card testi-box border-none bg-[#f1f0fe]">
  <div className="card-body py-5">
    <div className="mb-4">
      <img className='w-[200px] h-[50px] mx-auto' src="https://themesdesign.in/jobcy-react/layout/assets/images/logo/mailchimp.svg" />
    </div>
    <p className="testi-content lead text-muted mb-4">" Very well thought out and articulate communication.
      Clear milestones, deadlines and fast work. Patience. Infinite patience. No
      shortcuts. Even if the client is being careless. "</p>
    <h5 className="mb-0 text-[18.5px]">Jeffry Montgomery</h5>
    <p className="text-muted mb-0">Store Assistant</p>
  </div>
</div>
        </SwiperSlide>
        
      </Swiper>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Testimonials