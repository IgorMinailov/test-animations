import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {
  const [task, setTask] = useState('');  
  
  const onHandleSubmit = (e) => {
        e.preventDefault();
        if(!task) return null;
        addTodo(task);
        setTask('');
    }

    const onHandleChange = (e) => {
      const value = e.target.value;
      setTask(value);
    }
  
    return (
      <div className='taskWrapper'>
        <label>Create new task:&nbsp;</label>
        <form onSubmit={onHandleSubmit}>
          <input
            value={task}
            className='inputField'
            onChange={onHandleChange}
          />
        </form>
      </div>
    );
  };

  export default  TodoForm;