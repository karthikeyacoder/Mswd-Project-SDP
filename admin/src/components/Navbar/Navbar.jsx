import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>K-Eats</h1>
      <img className='profile' src={assets.karthikeya_admin} alt="" />
    </div>
  )
}

export default Navbar
