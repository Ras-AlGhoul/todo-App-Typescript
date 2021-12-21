import React, {useState, useEffect} from 'react'
import { Todo } from '../../utils/types';
import Card from './Card';
import TodoForm from './TodoForm';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async(): Promise<void> => {
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
      <TodoForm fetchTodos={fetchTodos}/>
      {todos.sort(i => i.done? -1 : 1).map((i, index) => <Card key={index} fetchTodos={fetchTodos} _id={i._id} title={i.title} description={i.description} done={i.done} />).reverse()}
    </div>
  )
}

export default TodoList;
