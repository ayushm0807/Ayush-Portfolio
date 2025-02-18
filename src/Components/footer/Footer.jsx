import React from 'react'
import './footer.css'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ayush Mishra</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      

      <div className="footer__socials">
        <a href="https://web.whatsapp.com/"><FaWhatsapp /></a>
        <a href="https://www.instagram.com/am_ayush08/"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/ayush-mishra-823268249/"><FaLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ayush Mishra. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
