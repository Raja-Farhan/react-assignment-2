import React from 'react'
import './HeroSection.css'
import Hero from '../../assets/images/Hero.svg'

const HeroSection = () => {
  return (
    <>
        <div className='hero-section w-100'>
            <div className="container">
                <div className='row'>
                    <div className='col-sm-12 col-lg-6 pt-lg-5 hero-left-section'>
                        <div className="row">
                            <div className="col-11 mb-3">
                                <h1 className='hero-heading text-white'>Our <span>consultation</span> is always in sync <br/> with your strategy</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-9 mb-3">
                                <p className='hero-subheading text-white'>Scelerisque dignissim in leo at magna donec mi metus ipsum luctus nam elit sociis luctus et aliquam libero.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button className='btn services-btn text-white rounded-0 px-4 py-2'>Our Services</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-6 mt-5 pt-5'>
                        <img src={Hero} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSection