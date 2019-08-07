import React, { Component } from 'react'

// Service
import recipeService from '../services/recipeService'

class Home extends Component {
  componentDidMount = async () => {
    try {
      const search = await recipeService.getRecipeByKeyword('onions')
      console.log(search.results)
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    return (
      <h1>Home</h1>
    )
  }
}

export default Home
