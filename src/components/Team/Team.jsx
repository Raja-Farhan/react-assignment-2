import React from 'react'
import './Team.css'
import employee1 from '../../assets/images/team1.svg'
import employee2 from '../../assets/images/team2.svg'
import employee3 from '../../assets/images/team3.svg'


const Team = () => {
  return (
    <>
        <div className='team-section mt-5 pt-5 mb-5 pb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-3 d-flex justify-content-center">
                        <h5 className='team-head'>Meet Our Team</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center mb-5">
                        <h3 className='team-main-head'>Experience Team Members</h3>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className='col-sm-12 col-lg-3 d-flex flex-column justify-content-center'>
                        <img src={employee1} className='mb-4' alt="" />
                        <p className='emp-name mb-1'>Robet C. Simmons</p>
                        <p className='emp-designation'>Business Consultant</p>
                    </div>
                    <div className='col-sm-12 col-lg-3 d-flex flex-column justify-content-center'>
                        <img src={employee2} className='mb-4' alt=""/>
                        <p className='emp-name mb-1'>Christopher L. Wagner</p>
                        <p className='emp-designation'>Senior Manager</p>
                    </div>
                    <div className='col-sm-12 col-lg-3 d-flex flex-column justify-content-center'>
                        <img src={employee3} className='mb-4' alt=""/>
                        <p className='emp-name mb-1'>Lwarence C. Dickerson</p>
                        <p className='emp-designation'>Financial Consultant</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Team