import React, { useState, useEffect } from 'react'
import { WorkTodo } from '../../utils/types';
import WorkCard from './WorkCard';
import WorkForm from './WorkForm';

const WorkTodoList = () => {
  const [todos, setTodos] = useState<WorkTodo[]>([]);
  const [pending, setPending] = useState<boolean>(true);

  const fetchTodos = async (): Promise<void> => {
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
      <WorkForm fetchTodos={fetchTodos} />
      <div className='workfilter'>
        <div className='workfilter__pending' onClick={() => setPending(true)}>Pending</div>
        <div className='workfilter__done' onClick={() => setPending(false)}>Done</div>
      </div>
      {pending && (
        <>
          {todos.filter(i => !i.done).map((i, index) => <WorkCard
            key={index}
            fetchTodos={fetchTodos}
            _id={i._id}
            title={i.title}
            description={i.description}
            deadline={i.deadline}
            done={i.done}
          />).reverse()}
        </>
      )}
      {!pending && (
        <>
          {todos.filter(i => i.done).map((i, index) => <WorkCard
            key={index}
            fetchTodos={fetchTodos}
            _id={i._id}
            title={i.title}
            description={i.description}
            deadline={i.deadline}
            done={i.done}
          />).reverse()}
        </>
      )}
    </div>
  )
};

export default WorkTodoList;
