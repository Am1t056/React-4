import React, { useEffect } from 'react'


function About() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component loads
      }, []);
  return (
    <div className='container-fluid bg-[#ffffff] py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                         <h4 className='text-[16px] text-[#495057] py-2'>About Us</h4>
                         <h2 className="text-[30px]  font-semibold mb-3">Why <span className="text-warning fw-bold">35,000+</span> People Trust On Jobcy?</h2>
                         <p className="text-muted">Start working with Jobcy that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content.</p>
                         <div className="row mt-4 pt-2 grid md:grid-cols-1 lg:grid-cols-2">
                                            <div >
                                                <ul className="list-unstyled about-list text-muted mb-0 mb-md-3">
                                                    <li className='mb-2 text-[15px]'> Digital Marketing Solutions</li>
                                                    <li className='mb-2 text-[15px]'> Our Talented &amp; Experienced Marketing Agency</li>
                                                    <li className='mb-2 text-[15px]'> Creative Design</li>
                                                    <li className='mb-2 text-[15px]'> New jobs Innovation</li>
                                                </ul>
                                            </div>
                                            <div >
                                                <ul className="list-unstyled about-list text-muted">
                                                    <li className='mb-2 text-[15px]'> Create Resume</li>
                                                    <li className='mb-2 text-[15px]'> 5000+ Comnpanies</li>
                                                    <li className='mb-2 text-[15px]'> Our Blog</li>
                                                    <li className='mb-2 text-[15px]'> and more...</li>
                                                </ul>
                                            </div>
                                        </div>
                    </div>
                    <div className="col-lg-6 px-0">
                         <img className='w-full h-[282px] py-0 md:my-12 lg:my-0 lg:h-full' src="https://themesdesign.in/jobcy-react/layout/assets/images/about/img-01.jpg" alt="" />
                     </div>
                </div>
            </div>
     
    </div>
  )
}

export default About