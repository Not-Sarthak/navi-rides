import React from 'react'
import './about.css'
import { about } from "../assets";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { car } from "../assets";

const Contact = () => {
  return (
    <div className="heading" style={{border: "0px solid #a8a8a8", borderRadius: "10px", boxShadow: "-1px 15px 30px -12px #a8a8a8"}}>
    <h1>Feel free to reach out to us!</h1>
    <section className="about-us">
    <img src={car} style={{height: "50%", width: "50%"}}/>
    <div style={{padding: "1rem"}}>
        <button className="Btn"> 
        <div>
          <div>
            <EmailIcon />
          </div>
        </div>
          <div>
            <a href="help@navirides.com" style={{textDecoration: "none", color: "black"}}>E-mail</a>
          </div>
        </button>
        </div>
        <div style={{padding: "1rem"}}>
        <button className="Btn"> 
        <div>
          <div>
            <InstagramIcon />
          </div>
        </div>
          <div>
            <a href="https://www.instagram.com/navirides/" style={{textDecoration: "none", color: "black"}}>Instagram</a>
          </div>
        </button>
        </div>
        </section>
  </div>
  )
}

export default Contact

