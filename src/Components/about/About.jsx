import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg'
import { FaAward } from "react-icons/fa";
import { MdOutlineLaptop } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'/>
          </div>
        </div>
      

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward  className='about__icons' />
              <h5>Experience</h5>
              <small>Multiple Project Work</small>
            </article>

            <article className='about__card'>
              <MdOutlineLaptop className='about__icons' />
              <h5>Interest</h5>
              <small>Fullstack | Blockchain</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icons' />
              <h5>Projects</h5>
              <small>Worked on 3+ Major</small>
            </article>
          </div>

          <p>
          Hey there, welcome to my portfolio! <br />
          I'm a dedicated Computer Science undergad at KIET Group of Institutions, 
          with a passion for full-stack development, blockchain technology, and My expertise extends to Data Structures and Algorithms (DSA), where I have actively solved over 200 problems, strengthening my problem-solving skills.
          I have contributed to multiple projects, exploring various domains of software development and continuously enhancing my technical proficiency.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>  
    </section>
  )
}

export default About
