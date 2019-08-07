import React from 'react'

// React router
import { Link } from 'react-router-dom'

const Card = ({ recipe }) => {
  return (
    <article className="card">
      <Link to={recipe.href}>
        <img
          className="card-img"
          src={recipe.thumbnail}
          alt={recipe.title}
        />
        <div className="card-info">
          <h3 className="card-title">{recipe.title}</h3>
          <p className="card-ingredients">{recipe.ingredients}</p>
        </div>
      </Link>
    </article>
  )
}

export default Card
