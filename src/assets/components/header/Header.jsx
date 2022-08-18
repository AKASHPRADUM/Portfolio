import React from 'react'
import './header.css'
import RES from './RES'
import HeaderSocial from './HeaderSocial'
import ME from '../../me.png'


const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello, I'm</h5>
        <h2>Pradum Kumar Dubey</h2>
        <h5 className='text-light'>FullStack Developer</h5>
        <RES />
        <HeaderSocial />
        <div className="myImg">
          <img src={ME} alt="my Image" />
        </div>
        <a className='scrolldown' href="#contact">SCROLL Down</a>
      </div>
    </header>
  )
}

export default Header;
