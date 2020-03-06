import React from 'react'
import MealPlanDay from './MealPlanDay';

export default function MealPlan() {

  const [plan, setPlan] = React.useState([
    {
      day: "monday",
      recipes: []
    },
    {
      day: "tuesday",
      recipes: []
    },
    {
      day: "wednesday",
      recipes: []
    },
    {
      day: "thursday",
      recipes: []
    },
    {
      day: "friday",
      recipes: []
    },
    {
      day: "saturday",
      recipes: []
    },
    {
      day: "sunday",
      recipes: []
    }
  ]);

  const addMealToDay = ( dayIndex, item ) => {
    plan[dayIndex].recipes.push(item)
  }

  return (
    <div className="section bg-gray-100 h-screen p-5">
      <div className="text-gray-400 text-xs text-center uppercase font-semibold tracking-wide mb-6">
        Your Plan for the Week
      </div>

      <div className="meal-plan-grid">
        {plan.map((day, index) => (
          <div key={day.day}>
            <MealPlanDay
              dayIndex={index}
              name={day.day}
              items={day.recipes}
              addMealToDay={addMealToDay}
            />
          </div>
        ))}
      </div>
    </div>
  );
}