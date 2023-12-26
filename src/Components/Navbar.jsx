import React, { useEffect, useState } from 'react'
import {FaBell} from 'react-icons/fa'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Home';
import About from '../About';

function Navbar() {
  const [nav,setNav]=useState(false)
  const handleNav=()=>{
    setNav(!nav);
  };


  const [showStickyHeader, setShowStickyHeader] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowStickyHeader(true);
      } else {
        setShowStickyHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

    <nav className='py-3 container-fluid bg-[#ffffff] '>
        <div className="container">
            <div className="row">
                    <div className="col-lg-1 col-md-2 col-sm-3 col-3 py-1">
                    <img  className='w-[101.85px] h-[20px]' src="https://themesdesign.in/jobcy-react/layout/assets/images/logo-dark.png" alt="" />
                    </div>
                   
                    <div className="col-lg-8 col-md-0 d-none d-lg-block">
                      <ul className='flex lg:justify-center md:justify-start  items-center'>
                              <li><Link className='uppercase px-3 text-[13px] text-[#314047] hover:text-[#776df4] font-semibold' to="/">Home</Link></li>
                              <li><Link className='uppercase px-3 text-[13px] text-[#314047] hover:text-[#776df4] font-semibold' to="about">Company<i className="fa-solid fa-angle-down m-2"></i></Link></li>
                              <li><a className='uppercase px-3 text-[13px] text-[#314047] hover:text-[#776df4] font-semibold' href="">Pages<i className="fa-solid fa-angle-down m-2"></i></a></li>
                              <li><a className='uppercase px-3 text-[13px] text-[#314047] hover:text-[#776df4] font-semibold' href="">Blog</a></li>
                              <li><a className='uppercase px-3 text-[13px] text-[#314047] hover:text-[#776df4] font-semibold' href="">Contact</a></li>

                          </ul>
                    </div>
                    

                    <div className="col-lg-3 col-md-10 col-sm-9 col-9 ">
                         <ul className='flex justify-end items-center'>
                          <li className='mr-2 d-block d-lg-none' onClick={handleNav}>{!nav?<AiOutlineMenu size={24}/>:<AiOutlineClose size={24}/>}</li>
                          <li className='mr-4'>
                            <a  href="">
                              <FaBell size={23} className='bell'/>
                            </a>
                            <div className='count absolute text-white text-[11px] top-[12px]  md:top-[55px] bg-[red] border-2 border-2-white'>
                                     3
                                 </div>
                            </li>
                          <li className='mr-2'><a  href=""><img className='w-[35px] h-[35px] rounded-full' src="https://themesdesign.in/jobcy-react/layout/assets/images/profile.jpg" alt="" /></a></li>
                          <li className='d-none d-md-block'><a className='text-[13px] font-medium w-full' href="">Hi, Jansh</a></li>
                         </ul>


                         <div className={!nav?'fixed left-[-100%]':'fixed mt-0 left-0 h-[250px] d-block d-lg-none bg-white text-black w-full border border-white ease-in-out duration-300 z-50'}>
                               <ul className='flex flex-col py-2'>
                                <li className='py-2'><Link className='text-[13px] text-[#314047] hover:text-[#776df4] uppercase font-medium ml-11' to="/">Home</Link></li>
                                <li className='py-2'><Link className='text-[13px] text-[#314047] hover:text-[#776df4] uppercase font-medium  ml-11' to="about">Company<i className="fa-solid fa-angle-down"></i></Link></li>
                                <li className='py-2'><a className='text-[13px] text-[#314047] hover:text-[#776df4] uppercase font-medium ml-11' href="">Pages <i className="fa-solid fa-angle-down"></i></a></li>
                                <li className='py-2'><a className='text-[13px] text-[#314047] hover:text-[#776df4] uppercase font-medium ml-11' href="">Blog</a></li>
                                <li className='py-2'><a className='text-[13px] text-[#314047] hover:text-[#776df4] uppercase font-medium ml-11' href="">Contact</a></li>
                               
 
                               </ul>
                        </div>



                    </div>
                    
                       
                    
            </div>
        </div>
      

    </nav> 




{/*STICKY NAV BEGINS */}

<nav className={!showStickyHeader?'fixed top-[-100%]':'fixed block top-0 w-full z-50 ease-in-out duration-400 py-3 bg-white'}>
<div className="container">
            <div className="row">
                    <div className="col-lg-1 col-md-2 col-sm-3 col-3 py-1">
                    <img  className='w-[101.85px] h-[20px]' src="https://themesdesign.in/jobcy-react/layout/assets/images/logo-dark.png" alt="" />
                    </div>
                   
                    <div className="col-lg-8 col-md-0 d-none d-lg-block">
                      <ul className='flex lg:justify-center md:justify-start  items-center'>
                              <li><Link className='uppercase px-3 text-[13px] text-[#314047] hover:text-[#776df4] font-semibold' to="/">Home</Link></li>
                              <li><Link className='uppercase px-3 text-[13px] text-[#314047] hover:text-[#776df4] font-semibold' to="about">Company<i className="fa-solid fa-angle-down m-2"></i></Link></li>
                              <li><a className='uppercase px-3 text-[13px] text-[#314047] hover:text-[#776df4] font-semibold' href="">Pages<i className="fa-solid fa-angle-down m-2"></i></a></li>
                              <li><a className='uppercase px-3 text-[13px] text-[#314047] hover:text-[#776df4] font-semibold' href="">Blog</a></li>
                              <li><a className='uppercase px-3 text-[13px] text-[#314047] hover:text-[#776df4] font-semibold' href="">Contact</a></li>

                          </ul>
                    </div>
                    

                    <div className="col-lg-3 col-md-10 col-sm-9 col-9 ">
                         <ul className='flex justify-end items-center'>
                          <li className='mr-2 d-block d-lg-none' onClick={handleNav}>{!nav?<AiOutlineMenu size={24}/>:<AiOutlineClose size={24}/>}</li>
                          <li className='mr-4'><a  href="">
                            <FaBell size={23} className='bell'/>    
                          </a>
                          <div className='count absolute text-white text-[11px] top-[12px]  bg-[red] border-2 border-2-white'>
                                     3
                                 </div>
                          </li>
                          <li className='mr-2'><a href=""><img className='w-[35px] h-[35px] rounded-full' src="https://themesdesign.in/jobcy-react/layout/assets/images/profile.jpg" alt="" /></a></li>
                          <li className='d-none d-md-block'><a className='text-[13px] font-medium w-full' href="">Hi, Jansh</a></li>
                         </ul>


                         <div className={!nav?'fixed left-[-100%]':'fixed mt-0 left-0 h-[150px] d-block d-lg-none bg-white text-black w-full border border-white ease-in-out duration-300 '}>
                               <ul className='flex flex-col py-2'>
                                <li className='py-2'><Link className='text-[13px] text-[#314047] hover:text-[#776df4] uppercase font-medium ml-11' to="/">Home</Link></li>
                                <li className='py-2'><Link className='text-[13px] text-[#314047] hover:text-[#776df4] uppercase font-medium  ml-11' to="about">Company<i className="fa-solid fa-angle-down"></i></Link></li>
                                <li className='py-2'><a className='text-[13px] text-[#314047] hover:text-[#776df4] uppercase font-medium ml-11' href="">Pages <i className="fa-solid fa-angle-down"></i></a></li>
                                <li className='py-2'><a className='text-[13px] text-[#314047] hover:text-[#776df4] uppercase font-medium ml-11' href="">Blog</a></li>
                                <li className='py-2'><a className='text-[13px] text-[#314047] hover:text-[#776df4] uppercase font-medium ml-11' href="">Contact</a></li>
                               
 
                               </ul>
                        </div>



                    </div>
                    
                       
                    
            </div>
        </div>
      
</nav>

{/*STICKY NAV ENDS */}


<Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  )
}

export default Navbar