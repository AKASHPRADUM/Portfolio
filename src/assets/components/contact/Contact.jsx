import React, { useRef } from 'react'
import './contact.css'
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2ix9hvk', 'template_bid360b', form.current, 'YxeoYNZzXmlUvA4Es')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className='contact_option_icon' />
            <h4>Email</h4>
            <h5>pradumkumardubey@gmail.com</h5>
            <a href="mailto:pradumkumardubey@gmail" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <AiOutlineMail className='contact_option_icon' />
            <h4>Email</h4>
            <h5>pradumkumardubey@gmail.com</h5>
            <a href="mailto:pradumkumardubey@gmail" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option_icon' />
            <h4>WhatsApp</h4>
            <h5>+91 8318661938</h5>
            <a href="https://wa.me/918318661938" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
