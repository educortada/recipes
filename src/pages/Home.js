import React, { Component } from 'react'
import { IS_LOADING, IS_READY, HAS_ERROR } from '../constants/index'
import recipeService from '../services/recipeService'

// Components
import List from '../components/List'

class Home extends Component {
  state = {
    status: IS_LOADING,
    popularRecipes: []
  }

  componentDidMount = async () => {
    try {
      const popularRecipes = await recipeService.getPopularRecipes()
      this.setState({
        status: IS_READY,
        popularRecipes: popularRecipes.results
      })
      console.log(popularRecipes.results)
    } catch (error) {
      this.setState({ status: HAS_ERROR })
      console.log(error)
    }
  }

  render () {
    const { status, popularRecipes } = this.state
    return (
      <>
        <main>
          <List
            status={status}
            popularRecipes={popularRecipes}
          />
        </main>
      </>
    )
  }
}

export default Home
