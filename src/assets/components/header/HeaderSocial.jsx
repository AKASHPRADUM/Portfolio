import React from 'react'
import './header.css'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="header-socials">
    <a href="https://linkedin.com/in/pradum-dubey-55009a1ba"><BsLinkedin /></a>
    <a href="https://github.com/AKASHPRADUM"><FaGithub /></a>
    <a href="https://github.com/AKASHPRADUM"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocial
