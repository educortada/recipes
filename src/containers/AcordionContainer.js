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
      handleSearchHistory,
      searchHistory
    } = this.props
    return (
      <Acordion
        handleDeleteSearchHistory={handleDeleteSearchHistory}
        handleSearchHistory={handleSearchHistory}
        handletToggle={this.handletToggle}
        isOpen={isOpen}
        searchHistory={searchHistory}
      />
    )
  }
}

export default AcordionContainer
