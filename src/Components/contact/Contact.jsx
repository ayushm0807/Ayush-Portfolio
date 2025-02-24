import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const Contact = () => {
  
 const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6dkw7no', 'template_zdn70ie', form.current, {
        publicKey: 'oWo1f7SUunSeyjPw5',
      })
      .then(
        () => {
          swal("Mail Sent!", "Thanks For Contacting!", "success");
        },
        (error) => {
          swal("Oops!", "Something went wrong!", "error");
        },
      );
      e.target.reset();
  };


  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>ayushm0807@gmail.com</h5>
              <a href="mailto:ayushm0807@gmail.com" target='_blank'> Send a Message</a>
            </article>

            <article className="contact__option">
              <CiLinkedin className='contact__option-icon'/>
              <h4>LinkedIn</h4>
              <h5>Connect With Me!</h5>
              <a href="https://www.linkedin.com/in/ayush-mishra-823268249/" target='_blank'> Connect</a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+91 6388963611</h5>
              <a href="https://web.whatsapp.com/" target='_blank'> Send a Message</a>
            </article>
          </div>

            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name' required />
              <input type="email" name='email' placeholder='Your Email' required/>
              <textarea name="message" rows="7" placeholder='Type Your Message' required ></textarea>
              <button type='submit' className='btn btn-primary' target='_blank'>Mail Me!</button>
            </form>
          
      </div>
    </section>
  )
}

export default Contact
