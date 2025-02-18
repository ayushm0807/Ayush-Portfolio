import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>

      <div className='container header__container'>
          <h5>Hello I'm</h5>
          <h1>Ayush Mishra</h1>
          <h5 className='text-light'>Fullstack Developer | Programmer</h5>
          <CTA/>

          <HeaderSocials/>

          <div className='me'>
            <img src={ME} alt=''/>
          </div>

          <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header
