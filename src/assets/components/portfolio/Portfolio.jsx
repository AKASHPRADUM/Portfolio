import React from 'react'
import './portfolio.css'
import IMG1 from '../../portfolio1.jpg'
import IMG2 from '../../portfolio2.jpg'
import IMG3 from '../../portfolio3.jpg'
import IMG4 from '../../portfolio4.jpg'
import IMG5 from '../../portfolio5.png'
import IMG6 from '../../portfolio6.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt="img 1" />
          </div>
          <h3>Banking-System</h3>
          <div className="portfolio_item_link">
            <a href="https://github.com/AKASHPRADUM/Banking-System.git" className='btn' target='_blank'>Github</a>
            <a href="https://obscure-shelf-74439.herokuapp.com" className='btn btn-primary' target='_blank'>live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG2} alt="img 1" />
          </div>
          <h3>This is Portfolio item title</h3>
          <div className="portfolio_item_link">
            <a href="https://github.com/AKASHPRADUM" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/AKASHPRADUM" className='btn btn-primary' target='_blank'>live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG3} alt="img 1" />
          </div>
          <h3>This is Portfolio item title</h3>
          <div className="portfolio_item_link">
            <a href="https://github.com/AKASHPRADUM" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/AKASHPRADUM" className='btn btn-primary' target='_blank'>live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG4} alt="img 1" />
          </div>
          <h3>This is Portfolio item title</h3>
          <div className="portfolio_item_link">
            <a href="https://github.com/AKASHPRADUM" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/AKASHPRADUM" className='btn btn-primary' target='_blank'>live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG5} alt="img 1" />
          </div>
          <h3>This is Portfolio item title</h3>
          <div className="portfolio_item_link">
            <a href="https://github.com/AKASHPRADUM" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/AKASHPRADUM" className='btn btn-primary' target='_blank'>live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG6} alt="img 1" />
          </div>
          <h3>This is Portfolio item title</h3>
          <div className="portfolio_item_link">
            <a href="https://github.com/AKASHPRADUM" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/AKASHPRADUM" className='btn btn-primary' target='_blank'>live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;
