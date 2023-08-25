import React from 'react'
import './Services.css'
import servicesLeftImage from '../../assets/images/services1.svg'
import servicesRightImage from '../../assets/images/services2.svg'


const Services = () => {
  return (
    <>
        <div className='services-section pt-5'>
            <div className="container">
                <div className="row mb-lg-5 pb-lg-3">
                    <div className="col-12 d-flex justify-content-center pb-lg-3">
                        <h6 className='services-heading'>Our Services</h6>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <h3 className='services-main-heading'>Amazing Business Services</h3>
                    </div>
                </div>
                    
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-12 col-lg-5">
                        <img src={servicesLeftImage} className='img-fluid services-left-image' alt="" />
                    </div>
                    <div className="col-sm-12 col-lg-5">
                        <img src={servicesRightImage} className='img-fluid services-right-image' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services