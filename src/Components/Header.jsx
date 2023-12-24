
import React, { useState } from 'react'
import {LiaFacebookMessenger} from 'react-icons/lia'
import {PiMessengerLogoBold} from 'react-icons/pi'




function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const handleHover = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='container-fluid py-2 bg-[#f8f9fc] text-[#495057] text-[13px] header hidden md:block'>
         <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-7">
                   <ul className='flex'>
                    <li className='text-[13px]'><i class="fa-solid fa-location-dot"></i>&nbsp;Your Location: <a className='' href="">North California</a></li>
                    <li className='text-[15px]'> <a className='px-2' href=""><i class="fa-brands fa-whatsapp"></i></a></li>
                    <li className='text-[15px]'> <a className=' px-2' href=""><i class="bi bi-messenger"></i></a></li>
                    <li className='text-[15px]'> <a className='px-2' href=""><i class="fa-brands fa-instagram"></i></a></li>
                    <li className='text-[15px]'> <a className='px-2' href=""><i class="fa-regular fa-envelope"></i></a></li>
                    <li className='text-[15px]'> <a className='px-2' href=""><i class="fa-brands fa-twitter"></i></a></li>

                   </ul>

                </div>
                <div className="col-lg-6 col-md-5">
                      <ul className='flex justify-end items-center'>
                        <li><i class="fa-solid fa-lock"></i>&nbsp;<a className='' href="">Sign Up</a></li>
                       <li>
                        <div className="dropdown" onMouseEnter={handleHover} onMouseLeave={handleHover} >
                              <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  >
                              <img className='w-[24.38px] h-[16px]' src="https://themesdesign.in/jobcy-react/layout/assets/images/flags/us.jpg" alt="" />
                              </button>
                              <div className={`dropdown-menu${isOpen ? ' show' : ''}`} aria-labelledby="dropdownMenuButton" >
                                    {/* Dropdown Content */}
                                    <a className="dropdown-item flex items-center hover:text-[#766df4] hover:scale-100 duration-100" href="#">
                                    <img className='w-[24.38px] h-[16px] mr-3' src="https://themesdesign.in/jobcy-react/layout/assets/images/flags/us.jpg" alt="" /> English
                                    </a>
                                    <a className="dropdown-item flex items-center hover:text-[#766df4] hover:scale-100 duration-100" href="#">
                                    <img className='w-[24.38px] h-[16px] mr-3' src="https://themesdesign.in/jobcy-react/layout/assets/images/flags/spain.jpg" alt="" /> Spanish
                                    </a>
                                    <a className="dropdown-item flex items-center hover:text-[#766df4] hover:scale-100 duration-100" href="#">
                                    <img className='w-[24.38px] h-[16px] mr-3' src="https://themesdesign.in/jobcy-react/layout/assets/images/flags/germany.jpg" alt="" /> German
                                    </a>
                                    <a className="dropdown-item flex items-center hover:text-[#766df4] hover:scale-100 duration-100" href="#">
                                    <img className='w-[24.38px] h-[16px] mr-3' src="https://themesdesign.in/jobcy-react/layout/assets/images/flags/italy.jpg" alt="" /> Italian
                                    </a>
                                    <a className="dropdown-item flex items-center hover:text-[#766df4] hover:scale-100 duration-100" href="#">
                                    <img className='w-[24.38px] h-[16px] mr-3' src="https://themesdesign.in/jobcy-react/layout/assets/images/flags/russia.jpg" alt="" /> Russian
                                    </a>
                              </div>
                        </div>

                        </li>
                      </ul>
                </div>
            </div>
      </div>
   </div>
  )
}

export default Header