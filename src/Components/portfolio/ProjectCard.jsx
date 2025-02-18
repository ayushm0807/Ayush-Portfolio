import React from 'react'

const ProjectCard = (props) => {
  return (
    <article className='portfolio__item'>
        <div className='portfolio__item-image'>
            <img src={props.img} alt=''/>
        </div>
        <h3>{props.title}</h3>
        <div className='portfolio__item-cta'>
          <a href={props.github} className='btn' target='_blank'>Github</a>
        <a href={props.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
    </article>
  )
}

export default ProjectCard
