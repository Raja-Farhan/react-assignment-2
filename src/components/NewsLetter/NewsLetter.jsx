import React from 'react'
import './NewsLetter.css'
import divider from '../../assets/images/divider.svg'

const NewsLetter = () => {
  return (
    <>
        <div className="newsletter-section mb-5">
            <div className="container newsletter-container pb-lg-5 pt-3 pb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-12 col-lg-6 d-flex justify-content-center">
                        <div className="row">
                            <div className='col-sm-12 col-lg-10 pt-5'>
                                <h4 className='newsletter-heading'>Subscribe to Our Newsletter For Weekly Article Update.</h4>
                                <p className='newsletter-para'>Passages of lorem ipsum available, but the majority have suffered alteration, by injected words.</p>
                            </div>
                            <div className='col-1 d-flex justify-content-center pt-lg-5'>
                                <img src={divider} className='divider' alt="" />
                             </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4 d-flex justify-content-center flex-column">
                        <button className='btn btn-started rounded-0 ms-lg-5 mt-5 w-50 py-2'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewsLetter