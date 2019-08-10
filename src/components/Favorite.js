import React from 'react'
import { connect } from 'react-redux'

// Helpers
import { sliceText } from '../helpers'

const ConnectedFavorite = ({
  favorites,
  handleFavoriteActive,
  isFavoriteActive
}) => {
  return (
    <div className="favorite">
      <button
        className="favorite-navbar"
        onClick={handleFavoriteActive}
      >
        <i className="fas fa-heart"></i>
        <span>{favorites.length}</span>
      </button>
      {isFavoriteActive && (
        <ul className="favorite-dropdown">
          {
            (favorites.length > 0)
              ? favorites.map(favorite => {
                return (
                  <li className="favorite-dropdown-item">
                    <p>{sliceText(favorite.title, 24)}</p>
                    <button
                      className="favorite-dropdown-remove"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </li>
                )
              })
              : <li className="favorite-dropdown-item">You don't have favorites yet</li>
          }
        </ul>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return { favorites: state.favorites }
}

const Favorite = connect(mapStateToProps)(ConnectedFavorite)

export default Favorite
