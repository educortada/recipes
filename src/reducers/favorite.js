import { ADD_FAVORITE, REMOVE_FAVORITE } from '../constants/action-types'
import uuidv1 from 'uuid/v1'

const initialState = { favorites: [] }

const favorite = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [
          ...state.favorites,
          {
            uuid: uuidv1(),
            title: action.recipe.title,
            href: action.recipe.href
          }
        ]
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(favorite => {
          return favorite.uuid !== action.uuid
        })
      }
    default:
      return state
  }
}

export default favorite
