import React from 'react'
import { useDrag } from "react-dnd"
import { ItemTypes } from '../utils/items'
import { IoIosCloseCircle } from 'react-icons/io';

const RecipeCard = ({ page, recipe, onRemove }) => {

  // Drag n Drop
  const [{ isDragging }, dragRef] = useDrag({
    item: {
      type: ItemTypes.CARD,
      recipe: recipe
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  return (
    <div
      className="recipe-card card shadow rounded-lg overflow-hidden cursor-move relative mb-4"
      key={recipe.id}
      ref={dragRef}
    >
      <div className="flex flex-row justify-start">
        <div className={`recipe-icon flex-center ${recipe.iconBgClass}`}>
          <span className="text-4xl" role="img" aria-label={recipe.iconLabel}>
            {recipe.icon}
          </span>
        </div>
        <div className="recipe-name p-4">{recipe.name}</div>
      </div>
      {
        page === "plan" &&
        <div className="recipe-card-remove flex-center" onClick={onRemove}>
          <IoIosCloseCircle className="text-gray-400" size="24" />
        </div>
      }
    </div>
  );
}

export default RecipeCard
