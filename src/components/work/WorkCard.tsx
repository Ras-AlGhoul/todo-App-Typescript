import React from 'react'
import { Todo } from '../../utils/types'
import axios from 'axios';

const WorkCard: React.FC<Todo> = ({ title, description, done, _id, fetchTodos }) => {
  const handleRemove = async (): Promise<void> => {
    await axios.delete(`http://localhost:4000/api/todos/${_id}`);
    fetchTodos();
  };

  return (
    <div className='workcard'>
      <h3 className='card__title'>{title}</h3>
      <h4 className='card__description'>{description}</h4>
      <img alt='remove-btn' className='card__removebtn' onClick={handleRemove} src='https://i.postimg.cc/Hx3vRdFL/7.png' />
    </div>
  )
};

export default WorkCard;
