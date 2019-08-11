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

  handleSearchApiCall = async (inputSearch) => {
    const { searchHistory } = this.state
    const {
      handleSearch,
      handleSearchActive,
      handleStatus
    } = this.props
    try {
      // Only search recipes when search bar has more than 3 characters.
      if (inputSearch.length > 3) {
        handleStatus(IS_LOADING)
        let search = await recipeService.getRecipesByKeyword(parseInputSearch(inputSearch))
        // Add UUID for each recipe
        search = search.results.map(recipe => {
          return { ...recipe, uuid: uuidv1() }
        })
        // Save search result
        handleSearch(search)
        this.setState({
          searchHistory: [
            ...searchHistory,
            { uuid: uuidv1(), inputSearch }
          ]
        })
        handleSearchActive(true)
        handleStatus(IS_READY)
      }
    } catch (error) {
      handleStatus(HAS_ERROR)
    }
  }

  handleSubmit = (event) => {
    const { inputSearch } = this.state
    event.preventDefault()
    this.handleSearchApiCall(inputSearch)
  }

  handleSearchHistory = (inputSearch) => {
    this.handleSearchApiCall(inputSearch)
  }

  handleDeleteSearchHistory = (searchHistory) => {
    this.setState({ searchHistory: [...searchHistory] })
  }

  resetInputSearch = () => {
    this.setState({ inputSearch: '' })
  }

  render () {
    const { inputSearch, searchHistory } = this.state
    return (
      <Search
        handleChangeInput={this.handleChangeInput}
        handleDeleteSearchHistory={this.handleDeleteSearchHistory}
        handleSearchHistory={this.handleSearchHistory}
        handleSearchActive={this.props.handleSearchActive}
        handleSubmit={this.handleSubmit}
        inputSearch={inputSearch}
        resetInputSearch={this.resetInputSearch}
        searchHistory={searchHistory}
      />
    )
  }
}

export default SearchContainer
