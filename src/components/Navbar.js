import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-logo" to='/'>
        <i className="navbar-logo-icon fas fa-utensils"></i>
        Recipes
      </Link>
    </nav>
  )
}

export default Navbar
