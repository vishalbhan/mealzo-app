import React from 'react'
import Monday from './plan/Monday'
import Tuesday from './plan/Tuesday'
import Wednesday from './plan/Wednesday'
import Thursday from './plan/Thursday'
import Friday from './plan/Friday'
import Saturday from './plan/Saturday'
import Sunday from './plan/Sunday'

export default function MealPlan() {

  return (
    <div className="section bg-gray-100 h-screen p-5">
      <div className="text-gray-400 text-xs text-center uppercase font-semibold tracking-wide mb-6">
        Your Plan for the Week
      </div>

      <div className="meal-plan-grid">
        <Monday />
        <Tuesday />
        <Wednesday />
        <Thursday />
        <Friday />
        <Saturday />
        <Sunday />
      </div>
    </div>
  );
}