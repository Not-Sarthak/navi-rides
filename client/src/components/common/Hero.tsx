import React from 'react'
import './hero.css'
import {car} from '../../assets'


const Hero = () => {
  return (
    <main>
    <div className="container">
      <img src={car} alt="" style={{height:"500px", width: "500px"}}/>
      <div className="hero-text">
        <h1>Find Your affordable and Shared rides.</h1>
        <p>
          Canada | United Kingdom | Australia
        </p>
        </div>
    </div>
  </main>
  )
}

export default Hero