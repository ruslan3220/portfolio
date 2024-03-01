import React from 'react'
import logo from "../../assets/image/logo.svg"
const Navbar = () => {
  return (
    <div className='navbar d-flex align-items-center justify-content-between pt-5'>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className='d-flex align-items-center gap-5'>
            <div>
              <ul className='d-flex gap-5 me-5'>
                <li><a className='text-secondary fs-5' href="#/">Home</a></li>
                <li><a className='text-secondary fs-5' href="#aboutme">About</a></li>
                <li><a className='text-secondary fs-5' href="#stack">Tech Stack</a></li>
                <li><a className='text-secondary fs-5' href="#project">Projects</a></li>
                <li><a className='text-secondary fs-5' href="#">Contact</a></li>
              </ul>
            </div>
            <div className='social d-flex gap-3 ms-5'>
              <a href="#"><i class="text-secondary fs-3 bi bi-github"></i></a>
              <a href="#"><i class="text-secondary fs-3 bi bi-twitter"></i></a>
              <a href="#"><i class="text-secondary fs-3 bi bi-linkedin"></i></a>
            </div>
            </div>
          </div>
  )
}

export default Navbar