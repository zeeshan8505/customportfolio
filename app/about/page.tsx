import React from 'react'
import Image from 'next/image'
import styles from "@/app/page.module.css"
import Navbar from '../component/navbar'
import AboutSection from '../component/aboutsection'
import Footer from '../component/footer'

const About = () => {
  return (
    
    <div>
      <Navbar/>
      <AboutSection/>
      <Footer/>
    </div>
    
  )
}

export default About
 