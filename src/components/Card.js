import React from 'react'

// Helpers
import { hasRecipeLactose, openNewTab } from '../helpers/index'

const renderIngredients = ingredients => {
  ingredients = ingredients.split(', ')
  return ingredients.map(ingredient => <li>{ingredient}</li>)
}

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
        <div className="card-lactose">
          <div className="card-lactose-text">
            <i className="fas fa-cheese"></i>Lactose
          </div>
        </div>
      )}
      <div className="card-info">
        <h3 className="card-title">{recipe.title}</h3>
        <ul className="card-ingredients">
          {renderIngredients(recipe.ingredients)}
        </ul>
      </div>
    </article>
  )
}

export default Card
