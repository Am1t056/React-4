import React from 'react'

function Categories() {
  return (
    <div className='container-fluid bg-[#ffffff]'>
        <div className="container">
            <div className="row flex justify-center">
                 <div className="col-lg-6">
                      <div className='section-title text-center'>
                         <h3 className='title text-[#495057] text-[30px] mt-8 font-medium'>Browse Job Categories</h3>
                         <p className=' text-muted text-[15px] py-2'>Post a job to tell us about your project. We'll quickly match you with the right freelancers.</p>
                      </div>
                 </div>
            </div>
            
            <div className="row flex">
                <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="popu-category-box rounded text-center">
                            <div className="popu-category-icon icons-md">
                                <span className='text-[#776df4]'><i class="fa-solid fa-desktop"></i></span>
                            </div>
                            <div className="popu-category-content mt-4">
                            <a href className="text-dark ">
                                <h5 className="text-[18px] font-medium">IT &amp; Software</h5>
                            </a>
                            <p className="text-muted mb-0">2024 Jobs</p>
                            </div>
                        </div>
                </div>


                <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="popu-category-box rounded text-center">
                            <div className="popu-category-icon icons-md">
                                <span className='text-[#776df4]'><i class="fa-solid fa-desktop"></i></span>
                            </div>
                            <div className="popu-category-content mt-4">
                            <a href className="text-dark ">
                                <h5 className="text-[18px] font-medium">Technology</h5>
                            </a>
                            <p className="text-muted mb-0">1250 Jobs</p>
                            </div>
                        </div>
                </div>

                <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="popu-category-box rounded text-center">
                            <div className="popu-category-icon icons-md">
                                <span className='text-[#776df4]'><i class="fa-solid fa-desktop"></i></span>
                            </div>
                            <div className="popu-category-content mt-4">
                            <a href className="text-dark ">
                                <h5 className="text-[18px] font-medium">Government</h5>
                            </a>
                            <p className="text-muted mb-0">802 Jobs</p>
                            </div>
                        </div>
                </div>


                <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="popu-category-box rounded text-center">
                            <div className="popu-category-icon icons-md">
                                <span className='text-[#776df4]'><i class="fa-solid fa-desktop"></i></span>
                            </div>
                            <div className="popu-category-content mt-4">
                            <a href className="text-dark ">
                                <h5 className="text-[18px] font-medium">Accounting/Finance</h5>
                            </a>
                            <p className="text-muted mb-0">577 Jobs</p>
                            </div>
                        </div>
                </div>

                <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="popu-category-box rounded text-center">
                            <div className="popu-category-icon icons-md">
                                <span className='text-[#776df4]'><i class="fa-solid fa-desktop"></i></span>
                            </div>
                            <div className="popu-category-content mt-4">
                            <a href className="text-dark ">
                                <h5 className="text-[18px] font-medium">Construction/Facilities</h5>
                            </a>
                            <p className="text-muted mb-0">285 Jobs</p>
                            </div>
                        </div>
                </div>

                <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="popu-category-box rounded text-center">
                            <div className="popu-category-icon icons-md">
                                <span className='text-[#776df4]'><i class="fa-solid fa-desktop"></i></span>
                            </div>
                            <div className="popu-category-content mt-4">
                            <a href className="text-dark ">
                                <h5 className="text-[18px] font-medium">Tele-Communications</h5>
                            </a>
                            <p className="text-muted mb-0">495 Jobs</p>
                            </div>
                        </div>
                </div>

                <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="popu-category-box rounded text-center">
                            <div className="popu-category-icon icons-md">
                                <span className='text-[#776df4]'><i class="fa-solid fa-desktop"></i></span>
                            </div>
                            <div className="popu-category-content mt-4">
                            <a href className="text-dark">
                                <h5 className="text-[18px] font-medium">Design &amp; Multimedia</h5>
                            </a>
                            <p className="text-muted mb-0">1045 Jobs</p>
                            </div>
                        </div>
                </div>

                <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="popu-category-box rounded text-center">
                            <div className="popu-category-icon icons-md">
                                <span className='text-[#776df4]'><i class="fa-solid fa-desktop"></i></span>
                            </div>
                            <div className="popu-category-content mt-4">
                            <a href className="text-dark">
                                <h5 className="text-[18px]">Human Resource</h5>
                            </a>
                            <p className="text-muted mb-0">1516 Jobs</p>
                            </div>
                        </div>
                </div>
            </div>

          <div className="row mb-5">
                <div className="col-lg-12 ">
                    <div className="mt-5 text-center hover:translate-x-2 hover:translate-y-[-10px] duration-1000">
                    <a href="" className="btn btn-secondary bg-[#766df4] hover:bg-[#766df9] text-[#ffffff]">Browse All Categories<i class="fa-solid fa-arrow-right ms-1 text-[12px]"></i></a>
                    </div>
                </div>
            </div>



        </div>
    </div>
  )
}

export default Categories