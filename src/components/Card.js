import React from 'react'
import uuidv1 from 'uuid/v1'
import { connect } from 'react-redux'
import { addFavorite } from '../actions/addFavorite'

// Helpers
import { hasRecipeLactose, openNewTab } from '../helpers/index'

const renderIngredients = ingredients => {
  ingredients = ingredients.split(', ')
  return ingredients.map(ingredient => (
    <li key={uuidv1()}>{ingredient}</li>
  ))
}

const ConnectedCard = ({ recipe, addFavorite }) => {
  const handleClick = event => {
    event.stopPropagation()
    addFavorite(recipe)
  }
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
      <div className="card-content">
        <div className="card-info">
          <h3 className="card-title">{recipe.title}</h3>
          <ul className="card-ingredients">
            {renderIngredients(recipe.ingredients)}
          </ul>
        </div>
        <div className="card-favorite">
          <button
            className="card-favorite-btn"
            onClick={(event) => { handleClick(event) }}
          >
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>
    </article>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (recipe) => dispatch(addFavorite(recipe))
  }
}

const Card = connect(null, mapDispatchToProps)(ConnectedCard)
export default Card
