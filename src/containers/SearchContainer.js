import React, { Component } from 'react'
import { IS_LOADING, IS_READY, HAS_ERROR } from '../constants/index'

// Components
import Search from '../components/Search'

// Services
import recipeService from '../services/recipeService'

class SearchContainer extends Component {
  state = { inputSearch: '' }

  handleChangeInput = (event) => {
    this.setState({ inputSearch: event.target.value })
  }

  handleSubmit = async (event) => {
    const { handleStatus, handleSearch, handleSearchActive } = this.props
    const { inputSearch } = this.state
    event.preventDefault()
    // Only search recipes when search bar is more than 3 characters.
    if (inputSearch.length > 3) {
      // TODO: Refactor less updade component!!
      try {
        handleStatus(IS_LOADING)
        // API call to search recipes by ingredient.
        const search = await recipeService.getRecipesByKeyword(inputSearch)
        // Save search result
        console.log(search)
        handleSearch(search.results)
        // Set true to isSearchActive state.
        handleSearchActive(true)
        handleStatus(IS_READY)
      } catch (error) {
        handleStatus(HAS_ERROR)
      }
    }
  }

  render () {
    const { inputSearch } = this.state
    return (
      <Search
        inputSearch={inputSearch}
        handleChangeInput={this.handleChangeInput}
        handleSubmit={this.handleSubmit}
        handleSearchActive={this.props.handleSearchActive}
        resetInputSearch={() => this.setState({ inputSearch: '' })}
      />
    )
  }
}

export default SearchContainer
