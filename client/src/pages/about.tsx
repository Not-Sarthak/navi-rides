import React from 'react'
import './about.css'
import { about } from "../assets";
const About = () => {
  return (
    <div className="heading">
    <h1>About Us</h1>
    <p>Who We Are</p>
    <section className="about-us">
      <img src={about} />
      <div className="content">
        <p style={{ textAlign: "left" }}>
        Welcome to Navi Rides - your seamless, eco-friendly transportation solution. Enjoy reliable and comfortable rides with dedicated drivers. Book effortlessly through our user-friendly website and join us in our mission for a greener future. Let's ride together!
        </p>
      </div>
    </section>
  </div>
  )
}

export default About