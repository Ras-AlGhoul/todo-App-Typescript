import React, { useState, useEffect } from 'react'
import { FoodTodo } from '../../utils/types';
import FoodCard from './FoodCard';
import FoodForm from './FoodForm';

const FoodTodoList = () => {
  const [todos, setTodos] = useState<FoodTodo[]>([]);
  const [pending, setPending] = useState<boolean>(true);

  const fetchTodos = async (): Promise<void> => {
    fetch('http://localhost:4000/api/foodtodos')
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
      <FoodForm fetchTodos={fetchTodos} />
      <div className='foodfilter'>
        <div className='foodfilter__pending' onClick={() => setPending(true)}>Pending</div>
        <div className='foodfilter__done' onClick={() => setPending(false)}>Done</div>
      </div>
      {pending && (
        <>
          {todos.filter(i => !i.done).map((i, index) => <FoodCard
            key={index}
            _id={i._id}
            imageUrl={i.imageUrl}
            title={i.title}
            protein={i.protein}
            carbohydrate={i.carbohydrate}
            description={i.description}
            fetchTodos={fetchTodos}
            done={i.done}
          />).reverse()}
        </>
      )}
      {!pending && (
        <>
          {todos.filter(i => i.done).map((i, index) => <FoodCard
            key={index}
            _id={i._id}
            imageUrl={i.imageUrl}
            title={i.title}
            protein={i.protein}
            carbohydrate={i.carbohydrate}
            description={i.description}
            fetchTodos={fetchTodos}
            done={i.done}
          />).reverse()}
        </>
      )}
    </div>
  )
}

export default FoodTodoList
