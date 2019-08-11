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
      // TODO: Refactor with less component updates.
      try {
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
      } catch (error) {
        handleStatus(HAS_ERROR)
      }
    }
  }

  // TODO: Don't repeat myself.
  handleSearch = async (inputSearch) => {
    const { handleStatus, handleSearch, handleSearchActive } = this.props
    try {
      handleStatus(IS_LOADING)
      let search = await recipeService.getRecipesByKeyword(parseInputSearch(inputSearch))
      // Add UUID for each recipe
      search = search.results.map(recipe => {
        return { ...recipe, uuid: uuidv1() }
      })
      // Save search result
      handleSearch(search)
      handleSearchActive(true)
      handleStatus(IS_READY)
    } catch (error) {
      handleStatus(HAS_ERROR)
    }
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
        handleSearch={this.handleSearch}
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
