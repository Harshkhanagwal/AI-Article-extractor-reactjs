import React from 'react'
import './Herosection.css'
import { Link } from 'react-router-dom'
const Herosection = () => {
  return (
    <>
      <section className='Herosection main'>
        <div className="container innerHeroSection">
          <h1 className='hero-heading'>Simplify, Summarize, and Extract <br /> with <span className="g-txt">AI-Powered Efficiency</span></h1>
          <p className='hero-subheading'>Experience TextEvoke AI: Effortlessly summarize articles, extract content from websites, and simplify text with advanced AI</p>

          <Link to={'/appinterface/articlesummarizer'}>
            <button className='getting-start-btn'>Getting Started</button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Herosection