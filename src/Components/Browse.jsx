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

                        <a className='btn btn-primary hover:translate-y-[-6px] ease-in hover:bg-[#766df7] mt-4 duration-1000 mb-2' href="">Started Now<i class="fa-solid fa-rocket ms-1"></i></a>
                    </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Browse