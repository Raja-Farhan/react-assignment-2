import React from 'react'
import { Fragment } from 'react'
import logo from '../../assets/images/logo.svg'
import './Header.css'

const Header = () => {
  return (
    <>
        {/* <div class="container">
          <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
            <div class="col-md-3 mb-2 mb-md-0">
              <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
              <img src={logo} alt="Not Found" />
              </a>
            </div>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/" class="nav-link text-black px-2 me-5">Home</a></li>
              <li><a href="/" class="nav-link text-black px-2 me-5">About</a></li>
              <li><a href="/" class="nav-link text-black px-2 me-5">Services</a></li>
              <li><a href="/" class="nav-link text-black px-2 me-5">Resources</a></li>
              <li><a href="/" class="nav-link text-black px-2 me-5">Projects</a></li>
            </ul>

            <div class="col-md-3 text-end">
              <button type="button" class="btn btn-header text-white px-4 py-2">Contact us today</button>
            </div>
          </header>
        </div> */}
        <nav className="navbar navbar-expand-lg bg-body-white">
            <div className="container">
              <a className="navbar-brand" href="/"><img src={logo} alt="" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link text-black me-5" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item me-5">
                    <a className="nav-link text-black" href="/">About</a>
                  </li>
                  <li className="nav-item me-5">
                    <a className="nav-link text-black" href="/">Services</a>
                  </li>
                  <li className="nav-item me-5">
                    <a className="nav-link text-black" href="/">Resources</a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link text-black" href="/">Projects</a>
                  </li>
                </ul>
                <button className="btn btn-header text-white px-3 py-2" type="submit">Contact us today</button>
              </div>
            </div>
          </nav>
    </>
  )
}

export default Header;