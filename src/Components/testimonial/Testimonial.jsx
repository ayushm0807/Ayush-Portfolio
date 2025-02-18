import React from 'react'
import './testimonial.css'
import avtr1 from '../../assets/avatar1.jpg'
import avtr2 from '../../assets/avatar2.jpg'
import avtr3 from '../../assets/avatar3.jpg'

import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Learning</h5>
      <h2>Certifications</h2>
      
      <Swiper className='container testimonials__container'
          modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}

      >
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={avtr1} alt='client avatar'/>
          </div>
          <h2 className='client__name'>Cloud Computing</h2>
            <small className='client__review'>
            The Cloud Computing certificate offered by IIT Kharagpur through NPTEL provides in-depth knowledge of cloud architecture, virtualization, and deployment models. It includes assignments, exams, and certification, equipping learners with industry-relevant skills.
            <br /><br />
            <a href="https://nptel.ac.in/noc/E_Certificate/NPTEL24CS118S105170040603951158" className='btn' target='_blank'>Proof Of Work</a>
            </small>
            
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={avtr3} alt='client avatar'/>
          </div>
          <h2 className='client__name'>Software Testing</h2>
            <small className='client__review'>
            The Software Testing course by IIT Madras and IIIT Bangalore via NPTEL covers testing methodologies, automation, and debugging techniques. It includes assignments, exams, and certification, preparing learners for industry-standard testing practices.
            <br /><br />
            <a href="https://nptel.ac.in/noc/E_Certificate/NPTEL24CS91S45170042203951158" className='btn' target='_blank'>Proof Of Work</a>
            </small>
            
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={avtr2} alt='client avatar'/>
          </div>
          <h2 className='client__name'>Web Development</h2>
            <small className='client__review'>
            The Complete Web Developer Bootcamp on Udemy, created by Dr. Angela Yu, covers HTML, CSS, JavaScript, Node.js, React, and databases. It includes hands-on projects, real-world applications, and certification, making it ideal for beginners and aspiring developers.
            <br /><br />
            <a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-492644ff-8e17-4f48-ab73-49a19bd2a520.pdf" className='btn' target='_blank'>Proof Of Work</a>
            </small>
            
        </SwiperSlide>

        
      </Swiper>


    </section>
  )
}

export default Testimonial
