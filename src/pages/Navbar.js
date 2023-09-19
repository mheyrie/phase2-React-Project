import { Link } from 'react-router-dom'
import React from 'react'
import '../Navbar.css'

function Navbar() {
  return (
    <nav className="nav-container">
        <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/Recipes">Recipes</Link></li>
        </ul>
    </nav>
    
  )
}

export default Navbar