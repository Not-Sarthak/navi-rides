import React from 'react'
import './about.css'
import { about } from "../assets";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <div className="heading">
    <h1>Feel free to reach out to us!</h1>
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
  </div>
  )
}

export default Contact

