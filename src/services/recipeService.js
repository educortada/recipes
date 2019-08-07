import { API_URL } from '../constants/index'

class RecipeService {
  constructor () {
    this.url = API_URL
  }

  // Get recipes search by ingredient (comma delimited for more ingredients).
  getRecipeByKeyword = (keyword) => {
    return fetch(`${this.url}?i=${keyword}`, { method: 'get' })
      .then(response => response.json())
  }
}

const recipeService = new RecipeService()
export default recipeService
