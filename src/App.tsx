import React from 'react';
import Home from './pages/Home';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WorkTask from './pages/WorkTask';
import FoodTask from './pages/FoodTask';
import Nav from './components/Nav';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/worktasks" element={<WorkTask />} />
        <Route path="foodtasks" element={<FoodTask />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
