import React from 'react'
import TodoList from '../components/normal/TodoList';

const Home: React.FC = () => {
  return (
    <div className='home'>
      <h1 className='home__header'>Todo App</h1><br />
      <p className='home__description'>full-stack Todo App made for Ubiquiti with TypeScript</p>
      <TodoList />
    </div>
  )
};

export default Home;
