import React, { Component } from 'react'
import { IS_LOADING, IS_READY, HAS_ERROR } from '../constants/index'
import recipeService from '../services/recipeService'

// Components
import Navbar from '../components/Navbar'
import List from '../components/List'
import SearchContainer from '../containers/SearchContainer'

class Home extends Component {
  state = {
    status: IS_LOADING,
    popularRecipes: [],
    search: [],
    isSearchActive: false
  }

  componentDidMount = async () => {
    try {
      const popularRecipes = await recipeService.getPopularRecipes()
      this.setState({
        status: IS_READY,
        popularRecipes: popularRecipes.results
      })
    } catch (error) {
      this.setState({ status: HAS_ERROR })
      console.log(error)
    }
  }

  handleStatus = (status) => {
    this.setState({ status })
  }

  handleSearch = (search) => {
    this.setState({ search })
  }

  handleSearchActive = (isSearchActive) => {
    this.setState({ isSearchActive })
  }

  render () {
    const {
      isSearchActive,
      popularRecipes,
      search,
      status
    } = this.state
    return (
      <>
        <Navbar />
        <main>
          <SearchContainer
            handleSearch={this.handleSearch}
            handleSearchActive={this.handleSearchActive}
            handleStatus={this.handleStatus}
          />
          <List
            isSearchActive={isSearchActive}
            popularRecipes={popularRecipes}
            search={search}
            status={status}
          />
        </main>
      </>
    )
  }
}

export default Home
