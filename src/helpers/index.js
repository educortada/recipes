export const hasRecipeLactose = recipe => {
  const ingredientsWithLactose = ['milk', 'cheese']
  const ingredients = recipe.ingredients.split(', ')
  // Find all ingredients that contain lactose.
  const foundLactose = ingredientsWithLactose.filter(ingredientWithLactose => {
    return ingredients.includes(ingredientWithLactose.toLocaleLowerCase())
  })

  return foundLactose.length !== 0
}
