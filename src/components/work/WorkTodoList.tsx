import React, { useState, useEffect } from 'react'
import { Todo } from '../../utils/types';
import WorkCard from './WorkCard';
import WorkForm from './WorkForm';

const WorkTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async(): Promise<void> => {
    fetch('http://localhost:4000/api/worktodos')
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
      <WorkForm fetchTodos={fetchTodos}/>
      {todos.map((i, index) => <WorkCard key={index} fetchTodos={fetchTodos} _id={i._id} title={i.title} description={i.description} done={i.done} />).reverse()}
    </div>
  )
};

export default WorkTodoList;
