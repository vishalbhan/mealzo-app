import React from 'react'
import RecipeCard from "./RecipeCard";
import { Button, Input, Tabs } from 'antd'
const { TabPane } = Tabs
const { Search } = Input

export default function MyMeals() {

  // Seed Data
  const [recipes, setRecipes] = React.useState([
    {
      id: 1,
      name: 'Chicken Burger [Akis\' Kitchen Youtube]',
      icon: '🍔',
      iconLabel: 'burger',
      iconBgClass: 'bg-red-100' 
    },
    {
      id: 2,
      name: 'Mediterranean Chickpea Salad',
      icon: '🥗',
      iconLabel: 'salad',
      iconBgClass: 'bg-green-100'
    },
    {
      id: 3,
      name: 'Sirloin Steak w/ Creamy Spinach [FoodWishes Youtube]',
      icon: '🥩',
      iconLabel: 'steak',
      iconBgClass: 'bg-red-100'
    },
    {
      id: 4,
      name: 'Fish Tacos',
      icon: '🌮',
      iconLabel: 'taco',
      iconBgClass: 'bg-red-100'
    },
    {
      id: 5,
      name: 'Avocado w/ Sourdough Toast',
      icon: '🥑',
      iconLabel: 'avocado',
      iconBgClass: 'bg-green-100'
    }
  ])

  function onTabChange(key) {
    console.log(key);
  }

  return (
    <div className="section my-meals p-5">
      {/* Add Recipe */}
      <div className="add-new-recipe mb-4">
        <Button className="rounded" type="dashed" size="large" block>
          <span className="text-xs uppercase font-semibold">
            + Add New Recipe
          </span>
        </Button>
      </div>

      {/* Search */}
      <div className="search-recipe mb-5">
        <Search
          className="rounded py-2"
          placeholder="Filter recipes"
          onSearch={value => console.log(value)}
        />
      </div>

      {/* Sort */}
      <Tabs onTabChange={onTabChange} defaultActiveKey="1">
        <TabPane tab="Homemade" key="1">
          {/* Home Recipes */}
        </TabPane>
        <TabPane tab="Delivery" key="2">
          {/* Delivery Items */}
        </TabPane>
      </Tabs>

      {/* Recipes */}
      <div className="recipes">
        <div className="text-gray-400 text-xs text-center uppercase font-semibold tracking-wide mb-4">
          Recipes
        </div>
        {recipes.map(recipe => (
          <RecipeCard recipe={recipe} page="meals" key={recipe.id} />
        ))}
      </div>
    </div>
  );
}
