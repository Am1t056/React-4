import React from 'react'

function Browse() {
  return (
    <div className='container-fluid bg-[#ffffff] py-5'>
    <div className='container'>
        <div className="row flex justify-center">
            <div className="col-lg-7">
                     <div className='section-title text-center py-3'>
                        <h4 className='title text-[#766df4] text-[30px] mt-8 font-bold'>Browse Our <span className=' text-yellow-400'>5,000+&nbsp;</span>Latest Jobs</h4>
                        <p className=' text-muted text-[15px] py-2'>Post a job to tell us about your project. We'll quickly match you with the right freelancers.</p>
                        <div className="mt-5 text-center hover:translate-x-2 hover:translate-y-[-10px] duration-1000">
                    <a href="" className="p-2 rounded-md bg-[#766df4] hover:bg-[#766df9] hover:text-[#fff] text-[#ffffff]">Started Now<i className="fa-solid fa-arrow-right ms-1 text-[12px]"></i></a>
                    </div>
                  
                  
                    </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Browse