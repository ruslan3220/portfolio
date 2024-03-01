import React from 'react'

const Aboutme = () => {
  return (
    <div className='about' id='aboutme'>
        <div>
        <p className='about-head'>About Me</p>
        <p className='about-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste sequi similique labore pariatur, atque voluptate nisi aspernatur tenetur iure perspiciatis praesentium, molestiae, aliquam inventore incidunt tempora assumenda maxime? Expedita, consequuntur?</p>
        </div>
        <div className='d-flex gap-5 justify-content-between'>
            <div className='w-50'>
                <p className='about-work'>Work Experience</p>
                <div className='about-work-wrap'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='fs-5 text-secondary fw-bolder'>Junior Web Developer</p>
                        <p className='about-time'>Full Time</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='text-secondary'><i class="bi bi-building"></i> Dr. Rajkumar’s Learning App</p>
                        <p className='text-secondary'><i class="bi bi-geo-alt"></i> Bengaluru</p>
                        <p className='text-secondary'><i class="bi bi-calendar2-week"></i> Sep 2021 - Dec 2021</p>
                    </div>
                </div>
                <div className='about-work-wrap'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='fs-5 text-secondary fw-bolder'>Junior Web Developer</p>
                        <p className='about-time'>Internship</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='text-secondary'><i class="bi bi-building"></i> Dr. Rajkumar’s Learning App</p>
                        <p className='text-secondary'><i class="bi bi-geo-alt"></i> Bengaluru</p>
                        <p className='text-secondary'><i class="bi bi-calendar2-week"></i> Sep 2021 - Dec 2021</p>
                    </div>
                </div>
                <div className='about-work-wrap'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='fs-5 text-secondary fw-bolder'>Junior Web Developer</p>
                        <p className='about-time'>Full Time</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='text-secondary'><i class="bi bi-building"></i> Dr. Rajkumar’s Learning App</p>
                        <p className='text-secondary'><i class="bi bi-geo-alt"></i> Bengaluru</p>
                        <p className='text-secondary'><i class="bi bi-calendar2-week"></i> Sep 2021 - Dec 2021</p>
                    </div>
                </div>
                <div className='about-work-wrap'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='fs-5 text-secondary fw-bolder'>Junior Web Developer</p>
                        <p className='about-time'>Full Time</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='text-secondary'><i class="bi bi-building"></i> Dr. Rajkumar’s Learning App</p>
                        <p className='text-secondary'><i class="bi bi-geo-alt"></i> Bengaluru</p>
                        <p className='text-secondary'><i class="bi bi-calendar2-week"></i> Sep 2021 - Dec 2021</p>
                    </div>
                </div>
            </div>
            <div className='w-50'>
                <p className='about-edu'>Education</p>
                <div className='about-work-wrap'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='fs-5 text-secondary fw-bolder'>Bachelor in Electronics & Communication</p>
                        <p className='about-time'>Full Time</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='text-secondary'><i class="bi bi-building"></i> Bangalore Instutute of Technology</p>
                        <p className='text-secondary '><i class="bi bi-calendar2-week"></i> Aug 2015 - Dec 2020</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutme