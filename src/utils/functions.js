export const addMealToDay = (plan, setPlan, item) => {
  let newPlan = plan
  newPlan.push(item)
  setPlan(newPlan)
}

export const removeMealFromDay = (plan, setPlan, id) => {
  let newPlan = plan
  newPlan = newPlan.filter(i => i.recipe.id !== id)
  setPlan(newPlan)
}