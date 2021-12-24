import React, { useState } from 'react'
import { FoodTodo } from '../../utils/types';
import axios from 'axios';
import EditFoodForm from './EditFoodForm';

const FoodCard: React.FC<FoodTodo> = ({
  title,
  description,
  done,
  _id,
  imageUrl,
  carbohydrate,
  protein,
  fetchTodos
}) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleRemove = async (): Promise<void> => {
    await axios.delete(`http://localhost:4000/api/foodtodos/${_id}`);
    fetchTodos();
  };

  const handleEdit = (): void => setToggle(show => !show);

  const handleDone = async (): Promise<void> => {
    await axios.put(`http://localhost:4000/api/foodtodos/${_id}`, { done: true });
    fetchTodos();
  };

  const handleUndone = async (): Promise<void> => {
    await axios.put(`http://localhost:4000/api/foodtodos/${_id}`, { done: false });
    fetchTodos();
  };

  return (
    <div className='foodcard'>
      <h3 className='card__title'>{title}</h3>
      <h4 className='card__description'>{description}</h4>
      <p>protein: {protein} gm</p>
      <p>carbohydrate: {carbohydrate} gm</p>
      <img alt='food-img' className='card__img' src={imageUrl} />
      <div className='card__buttons'>
        <img alt='remove-btn' className='card__removebtn' onClick={handleRemove} src='https://i.postimg.cc/Hx3vRdFL/7.png' />
        {!done && (
          <>
            <img alt='edit-btn' className='card__donebtn' onClick={handleEdit} src='https://i.postimg.cc/JzLf7cCS/9.png' />
            <img alt='done-btn' className='card__donebtn' onClick={handleDone} src='https://i.postimg.cc/5NyC62Hb/5.png' />
            {toggle && (
              <EditFoodForm fetchTodos={fetchTodos} id={_id} setToggle={setToggle} toggle={toggle} />
            )}
          </>
        )}
        {done && (
          <img alt='done-btn' className='card__undonebtn' onClick={handleUndone} src='https://i.postimg.cc/kghn5WVv/8.png' />
        )
        }
      </div>
    </div>
  )
};

export default FoodCard;
