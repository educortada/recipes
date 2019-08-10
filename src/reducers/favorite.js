import { ADD_FAVORITE } from '../constants/action-types'

const initialState = { favorites: [] }

const favorite = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [
          ...state.favorites,
          action.recipe
        ]
      }
    default:
      return state
  }
}

export default favorite
