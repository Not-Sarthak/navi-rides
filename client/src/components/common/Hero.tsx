import React from 'react'
import './hero.css'
import {car} from '../../assets'

const Hero = () => {

  return (
    <main>
    <div className="container" style={{marginTop: "0rem"}}>
      <img src={car} alt="" style={{height:"80%", width: "88%"}}/>
      <div className="hero-text">
        <div className = "ex">Find Your affordable and Shared rides.</div>
        <p>
          Canada | United Kingdom | Australia
        </p>
        </div>
    </div>
  </main>
  )
}

export default Hero