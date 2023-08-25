import React from 'react'
import './WhoWeAre.css'
import WhoBigImage from '../../assets/images/who1.svg'
import WhoSmallImage from '../../assets/images/who2.svg'

const WhoWeAre = () => {
  return (
    <>
        <div className="who-section mt-5 pt-5 mb-lg-5 pb-5">
            <div className="container">
                <div className="row gx-5 d-flex justify-content-center">
                    <div className="col-sm-12 col-lg-4 position-relative ms-lg-5 me-lg-5">
                            <img src={WhoBigImage} className='img-fluid' alt="" />
                        <div className='position-absolute small-image mt-sm-2'>
                            <img src={WhoSmallImage} className='img-fluid' alt="" />
                        </div>                
                    </div>
                    <div className='col-sm-12 col-lg-6'>
                        <div className="row">
                            <div className="col-12">
                                <h5 className='who-top-head'>Who We Are</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h2 className='who-main-head'>Have A Project In Mind? <br/> Let's Get To Work.</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 mt-lg-3 mb-lg-3">
                                <p className='who-para'>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium totam rem apereaque abillo inventore veritatis quasi architecto beatae</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p className='bullet-1'>1. Business Planning, Strategy</p>
                                <p className='bullet-2'>2. Financial Projections And Analysis</p>
                                <p className='bullet-3'>3. International Business Opportunities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WhoWeAre