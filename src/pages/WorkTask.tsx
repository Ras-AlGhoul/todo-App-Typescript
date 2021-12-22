import React from 'react'
import WorkTodoList from '../components/work/WorkTodoList';

const WorkTask: React.FC = () => {
  return (
    <div className="workTasks">
      <h1 className='workTasks__header'>Work Tasks</h1><br />
      <p className='workTasks__description'>here you can add special todos that are work related</p>
      <WorkTodoList />
    </div>
  )
}

export default WorkTask;
