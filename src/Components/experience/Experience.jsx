import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
          <div className='experience__frontened'>
              <h3>Development</h3>
              <div className='experience__content'>

                  <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons' />
                    <div>
                    <h4>ReactJS</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                  </article>

                  <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons' />
                    <div>
                    <h4>NextJS</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                  </article>

                  <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons' />
                    <div>
                    <h4>ExpressJS + NodeJS</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                  </article>

                  <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons' />
                    <div>
                    <h4>REST API</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
                  </article>

                  <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons' />
                    <div>
                    <h4>Mongo DB</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
                  </article>

                  <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons' />
                    <div>
                    <h4>Tailwind CSS</h4>
                    <small className='text-light'>Basic</small>
                    </div>
                  </article>

              </div>
          </div>

          <div className='experience__backend'>

          <h3>Languages and Others</h3>
              <div className='experience__content'>
                  <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons' />
                    <div>
                    <h4>C/C++</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                    
                  </article>

                  <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons' />
                    <div>
                    <h4>Javascript</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                  </article>

                  <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons' />
                    <div>
                    <h4>Git and GIthub</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                  </article>

                  <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons' />
                    <div>
                    <h4>Linux CLI</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                    
                  </article>


                  <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons' />
                    <div>
                    <h4>TypeScipt</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
                    
                  </article>

                  <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons' />
                    <div>
                    <h4>Solidity</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
                  </article>

              </div>
          </div>

          

      </div>
    </section>
  )
}

export default Experience
