import React, { useState } from 'react';
import axios from 'axios';
import { Form } from '../../utils/types';
import ImageUpload from './ImageUpload';

const FoodForm:React.FC<Form> = ({fetchTodos}) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [toggle, setToggle] = useState<Boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void> =
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newTodo = {
        title,
        description,
        imageUrl,
      }
      await axios.post('http://localhost:4000/api/todos', newTodo);
      setToggle(show => !show);
      setTitle('');
      setDescription('');
      fetchTodos();
    };

  return (
    <div className='form'>
      {!toggle && (
        <button className='foodform__addBtn' onClick={() => setToggle(show => !show)}>Add Todo</button>
      )}
      {toggle && (
        <form onSubmit={handleSubmit}>
          <label className='form__label'><strong> Title: </strong></label>
          <input className='foodform__input' value={title} onChange={({ target: { value } }) => setTitle(value)} />
          <label className='form__label'><strong> description: </strong></label>
          <input className='foodform__input' value={description} onChange={({ target: { value } }) => setDescription(value)} />
          <ImageUpload uploadImg={({ target: { value } }: any): any => setImageUrl(value)} />
          <button type="submit" className='foodform__confirmBtn'> Confirm </button>
        </form>
      )}
    </div>
  )
}

export default FoodForm
