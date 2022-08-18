import React from 'react'
import './services.css'
import { BsCheck } from "react-icons/bs";
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service service_1'>
          <h3 className='service_head'>UI/UX Design</h3>
          <ul className="services_list">
            <li>
              <BsCheck className='service_check' />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
          </ul>
        </article>
        <article className='service service_2'>
          <h3 className='service_head'>Web Development</h3>
          <ul className="services_list">
            <li>
              <BsCheck className='service_check' />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
          </ul>
        </article>
        <article className='service service_3'>
          <h3 className='service_head'>Content Creation</h3>
          <ul className="services_list">
            <li>
              <BsCheck className='service_check' />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Services;
