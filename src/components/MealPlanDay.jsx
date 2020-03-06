import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../utils/items';
import RecipeCard from './RecipeCard';

const MealPlanDay = ({ day }) => {

  const [{ isOver }, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      addMealToDay(day)
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
      key={name}
      ref={dropRef}
    >
      <div className="text-blue-700 text-xs uppercase font-semibold tracking-wide">
        {name}
      </div>
      <hr className="mt-2 mb-3 bg-gray-100" />
      <div>
        {items.map(item => (
          <RecipeCard recipe={item.recipe} key={item.recipe.id} />
        ))}
      </div>
    </div>
  );
}

export default MealPlanDay
