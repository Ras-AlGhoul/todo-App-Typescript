import React, { useState } from 'react'
import { WorkTodo } from '../../utils/types'
import axios from 'axios';
import EditWorkForm from './EditWorkForm';

const WorkCard: React.FC<WorkTodo> = ({ title, description, done, _id, deadline, fetchTodos }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleRemove = async (): Promise<void> => {
    await axios.delete(`http://localhost:4000/api/worktodos/${_id}`);
    fetchTodos();
  };

  const handleEdit = (): void => setToggle(show => !show);

  const handleDone = async (): Promise<void> => {
    await axios.put(`http://localhost:4000/api/worktodos/${_id}`, { done: true });
    fetchTodos();
  };

  const handleUndone = async (): Promise<void> => {
    await axios.put(`http://localhost:4000/api/worktodos/${_id}`, { done: false });
    fetchTodos();
  };

  return (
    <div className='workcard'>
      <h3 className='card__title'>{title}</h3>
      <h4 className='card__description'>{description}</h4>
      <h4 className='card__description'>{deadline}</h4>
      <div className='card__buttons'>
        <img alt='remove-btn' className='card__removebtn' onClick={handleRemove} src='https://i.postimg.cc/Hx3vRdFL/7.png' />
        {!done && (
          <>
            <img alt='edit-btn' className='card__donebtn' onClick={handleEdit} src='https://i.postimg.cc/JzLf7cCS/9.png' />
            <img alt='done-btn' className='card__donebtn' onClick={handleDone} src='https://i.postimg.cc/5NyC62Hb/5.png' />
            {toggle && (
              <EditWorkForm fetchTodos={fetchTodos} id={_id} setToggle={setToggle} toggle={toggle} />
            )}
          </>
        )}
        {done && (
          <img alt='done-btn' className='card__undonebtn' onClick={handleUndone} src='https://i.postimg.cc/kghn5WVv/8.png' />
        )
        }
      </div>    </div>
  )
};

export default WorkCard;
