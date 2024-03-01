import React from 'react'
import "../userpage/userpage.css"
import Navbar from './navbar/navbar'
import Hero from './hero/hero'
import Aboutme from './aboutme/aboutme'
import Projects from './projects/pojects'
import Stack from './stack/stack'
import Footer from './footer/footer'

const Userpage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Aboutme/>
        <Stack/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default Userpage