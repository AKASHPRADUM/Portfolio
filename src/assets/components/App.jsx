import React from 'react'
import About from './about/About'
import Contact from './contact/Contact'
import Header from './header/Header'
import Nav from './nav/Nav'
import Experience from './experience/Experience'
import Services from './services/Services'
import Portfolio from './portfolio/Portfolio'
import Testimonials from './testimonials/Testimonials'
import Footer from './footer/Footer'
import '../css/index.css'
const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}

export default App
