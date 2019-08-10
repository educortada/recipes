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

// Parse multiple ingredient by comma delimiter.
export const parseInputSearch = inputSearch => (
  inputSearch.split(' ').join(',')
)

// Extracts a section of a text and returns it with the length.
export const sliceText = (text, length) => {
  return `${text.slice(0, length)}...`
}
