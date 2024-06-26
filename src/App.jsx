import React, { useEffect, useState } from 'react'
import Navbar from './sections/navbar/Navbar'
import Background from '../src/assets/images/background.svg'
import Banner from './sections/banner/Banner'
import About from './sections/about/About'
import Skill from './sections/skill/Skill'
import Projects from './sections/projects/Projects'
import Contact from './sections/contacts/Contact'
import Education from './sections/education/Education'
import Footer from './sections/footer/Footer'
import Scroll from './components/scrollIcon/Scroll'

const App = () => {
  return (
    <>
    <section style={{backgroundImage: `url(${Background})`}}>
        <div className="container" >
            <Navbar/>
            <Banner/>
            <About/>
            <Skill/>
            <Projects/>
            <Education/>
            <Contact/>
            
            <Scroll/>
            
        </div>
        <Footer/>
    </section>
    </>
  )
}

export default App