import React from 'react'
import './services.css'
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container service__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Frontend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Building dynamic and interactive UIs using React and Next.js for high performance.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating responsive and appealing designs using CSS and modern styling techniques.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Managing state efficiently with Context API, ensuring smooth data flow across components.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Fetching and handling API data seamlessly using Axios, optimizing performance and error handling.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ensuring cross-browser compatibility and mobile responsiveness for a seamless user experience.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Focusing on accessibility, SEO, and smooth animations for a polished frontend experience.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Backend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Building secure and scalable backend systems using Node.js and Express.js.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integrating JWT and OAuth for robust authentication and authorization.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Using MongoDB or SQL for efficient and flexible database management with robust querying.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Testing and validating API endpoints using Postman to ensure smooth request handling.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developing smart contracts in Solidity, ensuring secure and efficient blockchain interactions.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integrating smart contracts with Web3.js or Ethers.js for blockchain-powered applications.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
