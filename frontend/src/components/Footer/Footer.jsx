import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <div className='head'>K-EATS</div>
            <p>This is an SEM project only we the members of ps-15 made this project only the knowledge we gained in our class</p>
            <div className="footer-social-icons">
            <a href=''>  <img src={assets.facebook_icon} alt="" /></a>
               <a href=''> <img src={assets.twitter_icon} alt="" /></a>
               <a href=''>    <img src={assets.linkedin_icon} alt="" /></a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 7416191169</li>
                <li></li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Karthikeya All Right Reserved.</p>
    </div>
  )
}

export default Footer
