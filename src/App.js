import React from 'react';
import './App.css';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend'

// Components
import MyMeals from './components/MyMeals';
import MealPlan from './components/MealPlan';
import Groceries from './components/Groceries';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <DndProvider backend={Backend}>
      <div className="site-grid">
        <Header />
        <MyMeals />
        <MealPlan />
        <Groceries />
      </div>
      <Footer />
    </DndProvider>
  )
}

export default App;
