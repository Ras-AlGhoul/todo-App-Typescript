import React, { useState, useEffect } from 'react'
import { Todo } from '../../utils/types';
import FoodCard from './FoodCard';
import FoodForm from './FoodForm';


const FoodTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async(): Promise<void> => {
    fetch('http://localhost:4000/api/todos')
    .then(res => res.json())
    .then(res => setTodos(res));
  };

  useEffect(() => {
    fetchTodos();
    return () => {
    }
  }, []);
  
  return (
    <div>
      <FoodForm fetchTodos={fetchTodos}/>
      {todos.map((i, index) => <FoodCard key={index} fetchTodos={fetchTodos} _id={i._id} title={i.title} description={i.description} done={i.done} />).reverse()}
    </div>
  )
}

export default FoodTodoList
