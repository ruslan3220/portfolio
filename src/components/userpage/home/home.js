import React from 'react'
import Navbar from '../navbar/navbar'
import Hero from '../hero/hero'
import Aboutme from '../aboutme/aboutme'
import Projects from '../projects/pojects'
import Stack from '../stack/stack'
import Footer from '../footer/footer'

const Home = () => {
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

export default Home