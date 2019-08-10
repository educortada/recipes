import { ADD_FAVORITE } from '../constants/action-types'

export const addFavorite = recipe => {
  return {
    type: ADD_FAVORITE,
    recipe
  }
}
