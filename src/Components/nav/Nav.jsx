import React from 'react'
import './nav.css'
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (

    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><FaRegUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ''}><BiBook /></a>
      <a href="#service" onClick={() => setActiveNav('#service')} className={activeNav === "#service" ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><BiMessage /></a>
    </nav>
  )
}

export default Nav
