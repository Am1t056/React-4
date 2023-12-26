import React from 'react'
import Swiper1 from './Swiper1'

function Hero() {
  return (
    <div className='container-fluid bg-[#f1f0fe] py-11'>
           <div className="container">
            <div className="row flex justify-between items-center">
                <div className="col-lg-7">
                                     <div class="mb-0 pb-3 me-lg-5 py-5 px-0">
                                        <h6 class="sub-title text-[14px] text-[#495057] uppercase font-[600]">We have 150,000+ live jobs</h6>
                                        <h1 class="display-5 fw-semibold mb-3 text-[38px] lg:text-[48px] w-full lg:w-[70%] text-[#495057] py-1">Thousand of Jobs is Waiting for you</h1>
                                        <p class="w-full md:w-[75%] mb-0 text-[18px] text-[#74788d]">Find jobs, create trackable resumes and enrich your applications.Carefully crafted after analyzing the needs of different industries.</p>
                                    </div>
                                    <form action="#">
                                        <div className="registration-form" >
                                            <div className="row  grid-cols-3 lg:grid ">
                                                <div className=" lg:px-0 py-0 lg:pl-3  mt-2 md:mt-0 ">
                                                <i class="fa-solid fa-briefcase absolute z-20 text-[#776df4] mt-3 ml-2 lg:ml-1 &nbsp; &nbsp;"></i>

                                                   <input type="search" className='w-full hover:outline-none h-full py-3 rounded-lg text-center text-[13.5px] text-gray-900 relative' placeholder='Job,Company name..' />
                                           
                                                </div>
                                                <div className="lg:px-0 mt-2 md:mt-0 h-[48px] ">
                                                     <i class="fa-solid fa-location-dot absolute z-20 text-[#776df4] mt-3 ml-2"></i>

                                                     <div class="input-group h-full w-full ">
                                                        <select className="form-select custom-select text-[13.5px] text-center border-0 outline-none" id="inputGroupSelect04" aria-label="Example select with button addon">
                                                          <option selected>Afghanistan</option>
                                                          <option value="1">Nepal</option>
                                                          <option value="2">India</option>
                                                          <option value="3">Bangladesh</option>
                                                        </select>
                                                       
                                                        </div>
                                           
                                                </div>
                                                <div className=" mt-2 md:mt-0 lg:px-0 ">
                                                <i class="fa-solid fa-search absolute z-20 text-white mt-3 ml-2 lg:ml-16 "></i>
                                                         <button className='relative text-center text-white bg-[#766df4] text-[13.5px] font-medium w-full h-[48px] rounded-lg'>Find Job</button>


                                                </div>
                                            </div>
                                        </div>
                                    </form>
                </div>
                <div className="col-lg-5">
                <Swiper1/>
             </div>
               
            </div>
           
           </div>

    </div>
  )
}

export default Hero