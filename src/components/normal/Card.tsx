import axios from 'axios';
import React from 'react';
import { Todo } from '../../utils/types';

const Card: React.FC<Todo> = ({ title, description, done, _id, fetchTodos }) => {
  const handleRemove = async (): Promise<void> => {
    await axios.delete(`http://localhost:4000/api/todos/${_id}`);
    fetchTodos();
  };

  const handleDone = async (): Promise<void> => {
    await axios.put(`http://localhost:4000/api/todos/${_id}`, { done: true });
    fetchTodos();
  };

  const handleUndone = async (): Promise<void> => {
    await axios.put(`http://localhost:4000/api/todos/${_id}`, { done: false });
    fetchTodos();
  };

  return (
    <div className='card'>
        <h3 className='card__title'>{title}</h3>
        <h4 className='card__description'>{description}</h4>
        <div className='card__buttons'>
          <img alt='remove-btn' className='card__removebtn' onClick={handleRemove} src='https://i.postimg.cc/Hx3vRdFL/7.png' />
          {!done && (
            <img alt='done-btn' className='card__donebtn' onClick={handleDone} src='https://i.postimg.cc/5NyC62Hb/5.png' />
          )}
          {done && (
            <img alt='done-btn' className='card__undonebtn' onClick={handleUndone} src='https://i.postimg.cc/kghn5WVv/8.png' />
          )
          }
      </div>
    </div>
  )
};

export default Card;
