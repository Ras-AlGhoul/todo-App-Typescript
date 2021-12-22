import React, { useState } from 'react';
import axios from 'axios';
import { Form } from '../../utils/types';

const WorkForm: React.FC<Form> = ({ fetchTodos }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [toggle, setToggle] = useState<Boolean>(false);

  const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void> =
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newTodo = {
        title,
        description
      }
      await axios.post('http://localhost:4000/api/worktodos', newTodo);
      setToggle(show => !show);
      setTitle('');
      setDescription('');
      fetchTodos();
    };

  return (
    <div className='form'>
      {!toggle && (
        <button className='workform__addBtn' onClick={() => setToggle(show => !show)}>Add Todo</button>
      )}
      {toggle && (
        <form onSubmit={handleSubmit}>
          <label className='form__label'><strong> Title: </strong></label>
          <input className='workform__input' value={title} onChange={({ target: { value } }) => setTitle(value)} />
          <label className='form__label'><strong> description: </strong></label>
          <input className='workform__input' value={description} onChange={({ target: { value } }) => setDescription(value)} />
          <button type="submit" className='workform__confirmBtn'> Confirm </button>
        </form>
      )}
    </div>
  )
}

export default WorkForm
