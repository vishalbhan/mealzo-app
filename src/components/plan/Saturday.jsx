import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../utils/items';
import RecipeCard from '../RecipeCard';
import { addMealToDay, removeMealFromDay } from '../../utils/functions'

const Saturday = () => {

  const [plan, setPlan] = React.useState([])

  const [{ isOver }, saturdayDropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      addMealToDay(plan, setPlan, item)
    },
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });

  return (
    <div
      className={`day bg-white shadow-sm rounded p-3 ${
        isOver ? "bg-blue-100" : ""
        }`}
      ref={saturdayDropRef}
    >
      <div className="text-blue-700 text-xs uppercase font-semibold tracking-wide">
        Saturday
      </div>
      <hr className="mt-2 mb-3 bg-gray-100" />
      <div>
        {plan.map(recipe => (
          <RecipeCard
            recipe={recipe.recipe}
            key={recipe.recipe.id}
            page="plan"
            onRemove={() => removeMealFromDay(plan, setPlan, recipe.recipe.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Saturday
