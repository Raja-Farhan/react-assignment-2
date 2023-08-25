import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/images/footer-logo.svg'
import socialMediaLogos from '../../assets/images/social-media.svg'

const Footer = () => {
  return (
    <>
        <div className="footer mt-5 pt-5">
            <div className="container">
                <div className="row d-flex justify-content-center pb-5">
                    <div className="col-sm-12 col-lg-3 justify-content-center ms-5">
                        <img src={footerLogo} className='mb-5' alt="" />
                        <p className='footer-para mb-5'>2021 Award winning Vaccination and Lorem ipsum dolor sit amet</p>
                        <img src={socialMediaLogos} className='' alt="" />
                    </div>
                    <div className="col-sm-12 col-lg-8 d-flex justify-content-center ms-lg-5 ms-sm-0 links-section">
                            <div className="col-sm-12 col-lg-3 d-flex flex-column mt-sm-3 links-col-1">
                                <h5 className='text-white'>Location</h5>
                                <a href="/" className='text-decoration-none text-white pt-4'>America</a>
                                <a href="/" className='text-decoration-none text-white pt-4' >Asia</a>
                                <a href="/" className='text-decoration-none text-white pt-4' >Europe</a>
                                <a href="/" className='text-decoration-none text-white pt-4' >Africa</a>
                            </div>
                            <div className="col-sm-12 col-lg-3 d-flex flex-column links-col-2">
                                <h5 className='text-white'>Contact</h5>
                                <a href="/" className='text-decoration-none text-white pt-4'>About Me</a>
                                <a href="/" className='text-decoration-none text-white pt-4'>Teams</a>
                                <a href="/" className='text-decoration-none text-white pt-4'>Profile</a>
                                <a href="/" className='text-decoration-none text-white pt-4'>FAQ</a>
                            </div>
                            <div className="col-sm-12 col-lg-3 d-flex flex-column links-col-3">
                                <h5 className='text-white'>Legals</h5>
                                <a href="/" className='text-decoration-none text-white pt-4'>Privacy</a>
                                <a href="/" className='text-decoration-none text-white pt-4'>Disclaimer</a>
                                <a href="/" className='text-decoration-none text-white pt-4'>Terms</a>
                                <a href="/" className='text-decoration-none text-white pt-4'>Company</a>
                            </div>
                    </div>
                </div>
            </div>    
        </div>
    </>
  )
}

export default Footer