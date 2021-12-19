import React, {useState, useEffect} from 'react'
import Card from './Card';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<[]>([]);
  const fetchTodos = () => {
    fetch('http://localhost:4000/api/todos')
    .then(res => res.json())
    .then(res => setTodos(res));
  };

  useEffect(() => {
    fetchTodos();
    return () => {
    }
  }, []);
  return (
    <div>
      {/* {todos.map((i, index) => <Card key={index} title={i.title} description={i.description} done={i.done} />)} */}
    </div>
  )
}

export default TodoList;
