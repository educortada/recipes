import { REMOVE_FAVORITE } from '../constants/action-types'

export const removeFavorite = (uuid) => {
  return {
    type: REMOVE_FAVORITE,
    uuid
  }
}
