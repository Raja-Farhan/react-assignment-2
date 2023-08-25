import React from 'react'
import './About.css'
import aboutLeftImage from '../../assets/images/about1.svg'
import aboutRightImage from '../../assets/images/about2.svg'

const About = () => {
  return (
    <>
        <div className="about-section pt-lg-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <div className="row">
                            <div className="col-sm-12 col-lg-5 left-image pe-0 ms-sm-0 ms-lg-5">
                                <img src={aboutLeftImage} className='img-fluid' alt="" />
                            </div>
                            <div className='col-sm-12 col-lg-5 right-image mt-lg-5 pt-3 pe-0'>
                                <img src={aboutRightImage} className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 right-section">
                        <div className="row">
                            <div className="col-12 pb-3">
                                <h5 className='about-heading'>About</h5>
                            </div>
                        </div>
                        <div className="row mb-4 main-head-div">
                            <div className="col-10">
                                <h2 className='about-main-heading'>Influencer Marketing for Your Business</h2>
                            </div>
                        </div>
                        <div className="row mb-4 para-div">
                            <div className="col-10 ">
                                <p className='about-para'>With over 25 years of experience, we have crafted thousands of Strategic discovery process that enables us to peel back the Layers which enable us to understand, connect, represent and Dominate your market.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 btn-div">
                                <button className='btn btn-phone py-3 px-4 rounded-0'>Phone Number: +002698 22 33</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About