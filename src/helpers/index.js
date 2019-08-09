export const hasRecipeLactose = recipe => {
  const ingredientsWithLactose = ['milk', 'cheese']
  const ingredients = recipe.ingredients.split(', ')
  // Find all ingredients that contain lactose.
  const foundLactose = ingredientsWithLactose.filter(ingredientWithLactose => {
    return ingredients.includes(ingredientWithLactose.toLocaleLowerCase())
  })

  return foundLactose.length !== 0
}

// Open URL as a new tab.
export const openNewTab = href => {
  window.open(href, '_blank')
}

export const parseInputSearch = inputSearch => (
  inputSearch.split(' ').join(',')
)
