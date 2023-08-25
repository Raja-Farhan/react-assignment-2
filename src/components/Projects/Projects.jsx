import React from 'react'
import projectImage1 from '../../assets/images/project1.svg'
import projectImage2 from '../../assets/images/project2.svg'
import projectImage3 from '../../assets/images/project3.svg'
import projectImage4 from '../../assets/images/project4.svg'
import './Projects.css'

const Projects = () => {
  return (
    <>
        <div className='projects-section mt-5 pt-lg-5 mb-5 pb-5'>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-sm-12 col-lg-12 mb-4 d-flex justify-content-center">
                        <h5 className='projects-top-head'>Latest Project & Case</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 mb-5 pb-lg-5 d-flex justify-content-center">
                        <h3 className='projects-main-head ps-sm-2'>Let's Look Our Global Projects</h3>
                    </div>
                </div>
                <div className="row d-flex justify-content-between">
                    <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center">
                        <img src={projectImage1} className='img-fluid image-1' alt="" />
                    </div> 
                    <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center"> 
                        <img src={projectImage2} className='img-fluid image-2' alt="" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center"> 
                        <img src={projectImage3} className='img-fluid image-3' alt="" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center"> 
                        <img src={projectImage4} className='img-fluid image-4' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects