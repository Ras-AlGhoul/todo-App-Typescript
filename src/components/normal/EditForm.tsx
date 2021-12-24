import axios from 'axios';
import React, { useState } from 'react';

interface Props{
  fetchTodos: () => Promise<void>,
  id: string,
  toggle: boolean,
  setToggle: (toggle: boolean) => void
}

const EditForm: React.FC<Props> = ({fetchTodos, id, setToggle, toggle}) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void> =
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const editTodo = {
        title,
        description
      }
      await axios.put(`http://localhost:4000/api/todos/${id}`, editTodo);
      setToggle(!toggle);
      setTitle('');
      setDescription('');
      fetchTodos();
    };

  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
          <label className='form__label'><strong> Title: </strong></label>
          <input className='form__input' value={title} onChange={({ target: { value } }) => setTitle(value)} />
          <label className='form__label'><strong> description: </strong></label>
          <input className='form__input' value={description} onChange={({ target: { value } }) => setDescription(value)} />
          <button type="submit" className='form__confirmBtn'> Confirm </button>
        </form>
   
    </div>
  )
};

export default EditForm;
