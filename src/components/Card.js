import React from 'react'

// React router
import { Link } from 'react-router-dom'

// Helpers
import { hasRecipeLactose } from '../helpers/index'

const Card = ({ recipe }) => {
  return (
    <article className="card">
      <Link to={recipe.href}>
        <img
          className="card-img"
          src={recipe.thumbnail}
          alt={recipe.title}
        />
        {hasRecipeLactose(recipe) && (
          <div className="card-lactose">Has lactose</div>
        )}
        <div className="card-info">
          <h3 className="card-title">{recipe.title}</h3>
          <p className="card-ingredients">{recipe.ingredients}</p>
        </div>
      </Link>
    </article>
  )
}

export default Card
