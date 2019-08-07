import React from 'react'
import { IS_LOADING, IS_READY, HAS_ERROR } from '../constants/index'

// Components
import Card from './Card'

const List = ({ status, popularRecipes }) => {
  const renderList = () => {
    const recipes = popularRecipes // TODO: Change when have search result
    return recipes.map(recipe => (
      <Card
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
          <div className="is-flex">
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
