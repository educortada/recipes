import React from 'react'

// Components
import AcordionContainer from '../containers/AcordionContainer'

const Search = ({
  inputSearch,
  handleChangeInput,
  handleSubmit,
  handleSearchActive,
  resetInputSearch,
  searchHistory,
  handleDeleteSearchHistory,
  handleSearch
}) => {
  const handleClick = () => {
    // Set false to isSearchActive state.
    handleSearchActive(false)
    // Reset text of search bar.
    resetInputSearch()
  }

  return (
    <section className="container is-bg-white has-navbar">
      <form className="search is-flex" onSubmit={handleSubmit}>
        <i className="fas fa-search"></i>
        <input
          className="search-input"
          onChange={handleChangeInput}
          value={inputSearch}
          placeholder="Ingredients..."
        />
        {(inputSearch.length > 0) && (
          <button
            onClick={handleClick}
            className="search-reset"
            type="button"
          >
            <i className="fas fa-times"></i>
          </button>
        )}
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="search-options">
        <AcordionContainer
          searchHistory={searchHistory}
          handleDeleteSearchHistory={handleDeleteSearchHistory}
          handleSearch={handleSearch}
        />
        <div className="search-tooltip">
          <i className="search-tooltip-icon fas fa-info-circle"></i>
          <p className="search-tooltip-text">Search multiple ingredients separated by space.</p>
        </div>
      </div>
    </section>
  )
}

export default Search
