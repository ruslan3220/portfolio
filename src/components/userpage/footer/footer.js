import React from 'react'
import logofoot from "../../assets/image/logo-foot.svg"

const Footer = () => {
  return (
         <div className="footer pb-4">
            <div className='d-flex align-items-center justify-content-between pb-3'>
              <div >
                <img src={logofoot} alt="" />
              </div>
              <div className='d-flex gap-5 align-items-center'>
                <p className='p-0 m-0'>+998945023220</p>
                <p className='p-0 m-0'>arifjanovruslan46@gmail.com</p>
                <div className='d-flex gap-3 ms-5'>
                  <a href="#"><i class="text-success fs-3 bi bi-github"></i></a>
                  <a href="#"><i class="text-success fs-3 bi bi-twitter"></i></a>
                  <a href="#"><i class="text-success fs-3 bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Footer