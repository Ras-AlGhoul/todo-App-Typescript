import React from 'react'
import FoodTodoList from '../components/food/FoodTodoList'

const FoodTask: React.FC = () => {
  return (
    <div className="foodTasks">
      <h1 className='foodTasks__header'>Food Tasks</h1><br />
      <p className='foodTasks__description'>here you can add special todos that are food related</p>
      <FoodTodoList />
    </div>
  )
}

export default FoodTask
