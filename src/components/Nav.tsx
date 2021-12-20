import React from 'react';
import { Link } from 'react-router-dom';


const Nav:React.FC = () => {
  return (
    <div className="nav">
        <img className="nav__logo" alt="Ubiquiti Logo" src="https://i.postimg.cc/FKDFDGPg/2.png"/>
      <Link to="/">
        <img className="nav__img" alt="Todos" src="https://i.postimg.cc/cHF0ZcP1/4.png"/>
      </Link>
      <Link to="/foodtasks">
        <img className="nav__img" alt="food todos" title="Food Tasks" src="https://i.postimg.cc/RZKswZSw/1.png"/>
      </Link>
      <Link to="/worktasks">
        <img className="nav__img" alt="work todos" title="work Tasks" src="https://i.postimg.cc/LX28m5XD/3.png"/>
      </Link>
    </div>
  )
}

export default Nav
