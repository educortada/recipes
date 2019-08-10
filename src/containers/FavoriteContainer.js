import React, { Component } from 'react'

// Components
import Favorite from '../components/Favorite'

class FavoriteContainer extends Component {
  state = { isFavoriteActive: false }

  // Toggle dropdown favorites menu
  handleFavoriteActive = () => {
    this.setState({
      isFavoriteActive: !this.state.isFavoriteActive
    })
  }

  render () {
    const { isFavoriteActive } = this.state
    return (
      <Favorite
        isFavoriteActive={isFavoriteActive}
        handleFavoriteActive={this.handleFavoriteActive}
      />
    )
  }
}

export default FavoriteContainer
