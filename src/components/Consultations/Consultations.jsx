import React from 'react'
import './Consultations.css'

const Consultations = () => {
  return (
    <>
        <div className='consult-section py-5 mb-5'>
            <div className='container py-5'>
                <div className='row d-flex justify-content-center'>
                    <div className="col-sm-12 col-lg-7">
                        <h3 className='consult-heading'>Get Free Consultations! We're Ready to Work Together</h3>
                    </div>
                    <div className="col-sm-12 col-lg-3 d-flex justify-content-center">
                        <button className='btn btn-consult px-4 mt-4 h-50 rounded-0'>Get Free Consultations</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Consultations