import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'



import ProjectCard from './ProjectCard'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className='container portfolio__container'>

      <ProjectCard title="NFT ArtHub" img={img1} github ="https://github.com/ayushm0807/NFT-ArtHub" demo="https://nft-arthub.vercel.app/"/>
      <ProjectCard title="MeShai GPT" img={img2} github ="https://github.com/ayushm0807/MeShai-GPT" demo="https://meshai-gpt.vercel.app/"/>
      <ProjectCard title="PromptPot" img={img3} github ="https://github.com/ayushm0807/PromptPot" demo="https://prompt-pot.vercel.app/"/>
      <ProjectCard title="React Keeper" img={img4} github ="https://github.com/ayushm0807/react-keeper-app" demo="https://react-keeper-app-beige.vercel.app/"/>
      <ProjectCard title="Drum Kit" img={img5} github ="https://github.com/ayushm0807/Drum-Kit" demo="https://ayushm0807.github.io/Drum-Kit/"/>


      </div>
    </section>
  )
}

export default Portfolio
