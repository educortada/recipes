import React from 'react'
import { Link } from 'react-router-dom'

// Components
import FavoriteContainer from '../containers/FavoriteContainer'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-logo" to='/'>
        <i className="navbar-logo-icon fas fa-utensils"></i>
        Recipes
      </Link>
      <FavoriteContainer />
    </nav>
  )
}

export default Navbar
