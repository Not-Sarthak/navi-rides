import React from 'react'
import './about.css'
import { about } from "../assets";
const Contact = () => {
  return (
    <div className="heading">
    <h1>Feel free to reach out to us!</h1>
        <div style={{ padding: "2rem", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <button className="Btn"> 
            <a href="help@navirides.com" style={{textDecoration: "none", color: "black"}}>E-mail</a>
        </button>
        <br/>
        </div>
        <div style={{padding: "1rem"}}>
        <button className="Btn"> 
        <a href="https://www.instagram.com/navirides/" style={{textDecoration: "none", color: "black"}}>Instagram</a>
        </button>
        </div>
  </div>
  )
}

export default Contact