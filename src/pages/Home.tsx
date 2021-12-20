import React from 'react'
import TodoList from '../components/TodoList';

const Home: React.FC = () => {
  return (
    <div className='home'>
      <h1 className='home__header'>Todo App</h1><br />
      <p className='home__description'>Todo App made for Ubiquiti</p>
      <TodoList />
    </div>
  )
}

export default Home
