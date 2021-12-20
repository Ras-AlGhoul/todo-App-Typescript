import React from 'react';
import { Todo } from '../utils/types';

const Card: React.FC<Todo> = ({title, description, done}) => {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{description}</h4>
    </div>
  )
};

export default Card;
