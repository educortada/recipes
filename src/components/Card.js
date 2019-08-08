import React from 'react'

// Helpers
import { hasRecipeLactose, openNewTab } from '../helpers/index'

const Card = ({ recipe }) => {
  return (
    <article
      className="card"
      onClick={() => openNewTab(recipe.href)}
    >
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
    </article>
  )
}

export default Card
