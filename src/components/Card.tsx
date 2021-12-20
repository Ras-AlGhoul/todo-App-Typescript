import axios from 'axios';
import React from 'react';
import { Todo } from '../utils/types';

const Card: React.FC<Todo> = ({title, description, done, _id, fetchTodos}) => {
  const handleRemove = async():Promise<void> =>  {
    await axios.delete(`http://localhost:4000/api/todos/${_id}`);
    fetchTodos();
  }
  return (
    <div className='card'>
      <h3 className='card__title'>{title}</h3>
      <h4 className='card__description'>{description}</h4>
      <button className='card__rmvButton' onClick={handleRemove}> Remove </button>
    </div>
  )
};

export default Card;
