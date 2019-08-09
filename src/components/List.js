import React from 'react'
import { IS_LOADING, IS_READY, HAS_ERROR } from '../constants/index'
import uuidv1 from 'uuid/v1'

// Components
import Card from './Card'

const List = ({ status, isSearchActive, popularRecipes, search }) => {
  const renderList = () => {
    const recipes = isSearchActive ? search : popularRecipes
    // Recipes with empty result.
    if (!recipes.length) {
      return <h3>No results!</h3>
    }
    // Render search or popular recipes.
    return recipes.map(recipe => (
      <Card
        key={uuidv1()}
        recipe={recipe}
      />
    ))
  }

  switch (status) {
    case IS_LOADING:
      return (
        <div className="spinner-container">
          <div className="lds-dual-ring"></div>
        </div>
      )
    case IS_READY:
      return (
        <section className="container is-flex-center">
          {!isSearchActive && (
            <h3 className="container-title">Popular recipes</h3>
          )}
          <div className="is-flex has-dynamic-height">
            {renderList()}
          </div>

        </section>
      )
    case HAS_ERROR:
      return (
        <section className="container is-flex-center">
          <h3>Oops! Something went wrong.</h3>
        </section>
      )
    default:
      return null
  }
}

export default List
