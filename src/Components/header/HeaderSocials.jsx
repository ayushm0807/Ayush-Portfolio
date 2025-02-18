import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/ayush-mishra-823268249/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/ayushm0807" target='_blank' rel="noreferrer"><FaGithub /></a>
      <a href="https://www.instagram.com/am_ayush08/" target='_blank' rel="noreferrer"><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials
