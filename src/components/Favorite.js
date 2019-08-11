import React from 'react'
import { connect } from 'react-redux'
import { removeFavorite } from '../actions/removeFavorite'

// Helpers
import { sliceText, openNewTab } from '../helpers'

const ConnectedFavorite = ({
  favorites,
  handleFavoriteActive,
  isFavoriteActive,
  removeFavorite
}) => {
  const handleRemove = (event, uuid) => {
    event.stopPropagation()
    removeFavorite(uuid)
  }
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
                  <li
                    key={favorite.uuid}
                    className="favorite-dropdown-item"
                    onClick={() => openNewTab(favorite.href)}
                  >
                    <p>{sliceText(favorite.title, 30)}</p>
                    <button
                      className="favorite-dropdown-remove"
                      onClick={(event) => handleRemove(event, favorite.uuid)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeFavorite: (uuid) => dispatch(removeFavorite(uuid))
  }
}

const Favorite = connect(mapStateToProps, mapDispatchToProps)(ConnectedFavorite)

export default Favorite
