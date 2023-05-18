import React from 'react'
import './Home.css'
import slide1 from './img/slide/slide-1.jpg';

const home = () => {
  return (
    <div id='hero'>
      <div className="hero-container">
            <div className="carousel-item active" style={{ backgroundImage: `url(${slide1})` }}>
              <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Hooked On</span></h2>
                <p className="animate__animated animate__fadeInUp">Ever want to make a granny square blanket but didn't know where to get started? Here on Hooked On, we're hooked on granny squares! Explore patterns, a granny square calculator and yarn calculator!</p>
              </div>
            </div>
        </div>
      </div >
    </div >
  )
}

export default home
