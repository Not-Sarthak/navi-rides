import React from 'react'
import './hero.css'
import {car} from '../../assets'


const Hero = () => {
  return (
    <main>
    <div className="container" style={{marginTop: "2rem"}}>
      <img src={car} alt="" style={{height:"80%", width: "100%"}}/>
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