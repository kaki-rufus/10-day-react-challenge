import React from 'react'
import '../App.css'


const Navbar = () => {
  return (
    <div className='nav-bar'>
      <h1 className='logo'>kAkI</h1>
      <div className='nav-items'>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Service</a>
        <a href="#">Contact</a>
      </div>
    </div>
  )
}

export default Navbar
