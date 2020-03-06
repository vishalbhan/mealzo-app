import React from 'react'
import { Checkbox } from 'antd';

export default function Groceries() {

  const [grocieries, setGroceries] = React.useState([
    {
      id: 1,
      name: 'Tomatoes',
      checked: true
    },
    {
      id: 2,
      name: 'Onions',
      checked: true
    },
    {
      id: 3,
      name: 'Cucumber',
      checked: false
    },
    {
      id: 4,
      name: 'Lettuce',
      checked: false
    },
    {
      id: 5,
      name: 'Olive Oil',
      checked: false
    },
  ])

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <div className="section groceries p-5">
      
      <div className="text-4xl mb-4"><span role="img" aria-label="cart">🛒</span></div>

      {/* Grocery List */}
      {
        grocieries.map(item => (
          <div className="grocery-item mb-2" key={item.id}>
            <Checkbox onChange={onChange} checked={item.checked}>{item.name}</Checkbox>
          </div>
        ))
      }
    
    </div>
  );
}
