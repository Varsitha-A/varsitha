import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <ul className="navbar">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/service'>Service</Link></li>
            <li><Link to='/products'>Products</Link></li>
            
        </ul>
    </div>
  )
}

export default Navbar