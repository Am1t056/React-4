import React from 'react'

function Footer() {
  return (
    <>
    <div className='container-fluid bg-[#343c3f] py-5'>
        <div className="container">
            <div className=" grid lg:grid-cols-3 items-center justify-center">
                <div className=''>
                    <h4 className='text-white font-semibold text-[22.5px]'>Get New Jobs Notification!</h4>
                    <p className=" text-[#f1f0fe] mb-0 text-[15px] py-1">Subscribe &amp; get all related jobs notification.</p>
                </div>
                <div className='flex justify-center items-center lg:col-span-2 flex-nowrap mt-2 md:mt-0'>
                    <form action="">
                    <input className='h-[36px] bg-transparent border rounded-md' type="email" name='email' placeholder='Enter Your Email' />
                    <button className='py-2 px-4 rounded-md  bg-[#766df4] hover:bg-[#766df6] text-white' >Subscribe</button>
                    </form>
                </div>
                 
            </div>
        </div>

    </div>
    <div className="container-fluid bg-[#2e3538] py-5">
        <div className="container">
            <div className="row flex justify-between">

                <div className='col-lg-6'>
                      <h1 className='text-[#766df4] text-[22.5px] font-extrabold shadow-2xl'>Jobcy</h1>
                      <p className="text-[#f1f0fe] py-2 w-full lg:w-[55%]">It is a long established fact that a reader will be of a page reader will be of at its layout.</p>
                      <p className='text-[14px] text-[#ffffff] font-medium' >Follow Us On:</p>
                      <ul className='flex  items-center py-2 justify-between md:justify-start'>
                          <li className='w-[32px] h-[32px] border rounded-[50%] text-center py-1 hover:bg-[#766df4]'><a className='text-white' href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                          <li className='w-[32px] h-[32px] border rounded-[50%] text-center py-1 ml-4 hover:bg-[#766df4]'><a className='text-white' href=""><i className="fa-brands fa-instagram"></i></a></li>
                          <li className='w-[32px] h-[32px] border rounded-[50%] text-center py-1 ml-4 hover:bg-[#766df4]'><a className='text-white' href=""><i className="fa-brands fa-linkedin"></i></a></li>
                          <li className='w-[32px] h-[32px] border rounded-[50%] text-center py-1 ml-4 hover:bg-[#766df4]'><a className='text-white' href=""><i className="fa-brands fa-twitter"></i></a></li>

                      </ul>
                </div>
                <div className=' col-lg-6 flex flex-wrap justify-between my-0 md:my-2'>
             <div className='flex items-center flex-col gap-0'>
                <h6 className='font-bold  text-[#766df4] text-left'>Solutions</h6>
                <ul className='text-gray-600 font-medium py-1 px-0'>
                    <li className='py-2 w-full'>Analytics</li>
                    <li className='py-2 w-full'>Marketing</li>
                    <li className='py-2 w-full'>Commerce</li>
                    <li className='py-2 w-full'>Insights</li>
                    

                </ul>
             </div>

             <div className='flex items-center flex-col gap-0'>
                <h6 className='font-bold  text-[#766df4] text-left'>Support</h6>
                <ul className='text-gray-600 font-medium py-1 px-0'>
                    <li className='py-2 w-full'>Pricing</li>
                    <li className='py-2 w-full'>Guides</li>
                    <li className='py-2 w-full'>API Status</li>
                    

                </ul>
             </div>

             <div className='flex items-center flex-col gap-0'>
                <h6 className='font-bold  text-[#766df4] text-left'>Company</h6>
                <ul className='text-gray-600 font-medium py-1 px-0'>
                    <li className='py-2 w-full'>About</li>
                    <li className='py-2 w-full'>Blog</li>
                    <li className='py-2 w-full'>Jobs</li>
                    <li className='py-2 w-full'>Careers</li>
                    

                </ul>
             </div>

             
             <div className='flex items-center flex-col gap-0'>
                <h6 className='font-bold  text-[#766df4] text-left'>Legal</h6>
                <ul className='text-gray-600 font-medium py-1 px-0'>
                    <li className='py-2 w-full'>Policy</li>
                    <li className='py-2 w-full'>Claim</li>
                    <li className='py-2 w-full'>Terms</li>
                  
                    

                </ul>
             </div>
        </div>

            </div>
        </div>
        
        <hr className='text-white mt-2' />
        <div className="container py-2">
            <div className="row flex justify-center items-center">
                <div className="col-lg-6 ">
                          <p className="text-[#f1f0fe] text-center mb-0">
                                    <script>document.write(new Date().getFullYear())</script>2023 © Amit - Job Listing Page
                                    
                                </p>
                </div>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default Footer