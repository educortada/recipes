import React, { Component } from 'react'
import { IS_LOADING, IS_READY, HAS_ERROR } from '../constants/index'
import uuidv1 from 'uuid/v1'

// Components
import Search from '../components/Search'

// Services
import recipeService from '../services/recipeService'

// Helpers
import { parseInputSearch } from '../helpers/index'

class SearchContainer extends Component {
  state = {
    inputSearch: '',
    searchHistory: []
  }

  handleChangeInput = (event) => {
    this.setState({ inputSearch: event.target.value })
  }

  handleSubmit = async (event) => {
    const { handleStatus, handleSearch, handleSearchActive } = this.props
    const { inputSearch, searchHistory } = this.state
    event.preventDefault()
    // Only search recipes when search bar is more than 3 characters.
    if (inputSearch.length > 3) {
      // TODO: Refactor less updade component!!
      try {
        handleStatus(IS_LOADING)
        // API call to search recipes by ingredient.
        const search = await recipeService.getRecipesByKeyword(parseInputSearch(inputSearch))
        // Save search result
        handleSearch(search.results)
        this.setState({
          searchHistory: [...searchHistory, { uuid: uuidv1(), inputSearch }]
        })
        // Set true to isSearchActive state.
        handleSearchActive(true)
        handleStatus(IS_READY)
      } catch (error) {
        handleStatus(HAS_ERROR)
      }
    }
  }

  handleDeleteSearchHistory = (searchHistory) => {
    this.setState({ searchHistory: [...searchHistory] })
  }

  render () {
    const { inputSearch, searchHistory } = this.state
    return (
      <Search
        inputSearch={inputSearch}
        handleChangeInput={this.handleChangeInput}
        handleSubmit={this.handleSubmit}
        handleSearchActive={this.props.handleSearchActive}
        resetInputSearch={() => this.setState({ inputSearch: '' })}
        searchHistory={searchHistory}
        handleDeleteSearchHistory={this.handleDeleteSearchHistory}
      />
    )
  }
}

export default SearchContainer
