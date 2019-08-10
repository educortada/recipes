import React, { Component } from 'react'

// Components
import Acordion from '../components/Acordion'

class AcordionContainer extends Component {
  state = { isOpen: false }

  handletToggle = () => {
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
  }

  render () {
    const { isOpen } = this.state
    const {
      handleDeleteSearchHistory,
      handleSearch,
      searchHistory
    } = this.props
    return (
      <Acordion
        isOpen={isOpen}
        handletToggle={this.handletToggle}
        searchHistory={searchHistory}
        handleDeleteSearchHistory={handleDeleteSearchHistory}
        handleSearch={handleSearch}
      />
    )
  }
}

export default AcordionContainer
