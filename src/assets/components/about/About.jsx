import React from 'react'
import './about.css'
import ME from '../../me-about.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="about me img" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+ year working</small>
            </div>
            <div className="about_card">
              <FiUsers className='about_icon' />
              <h5>Clints</h5>
              <small>300+ WorldWide</small>
            </div>
            <div className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reiciendis iusto adipisci in nulla magni excepturi quod, laborum nisi culpa asperiores libero itaque nemo? Ullam ea voluptatibus laboriosam laudantium nulla.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
