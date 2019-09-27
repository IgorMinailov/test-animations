import React from 'react';
import classnames from 'classnames';
import ToDoCheckbox from './ToDoCheckbox';


function ToDoList({ todos, remove }) {
    
    const onHandleChecked = (id) => () => {
        remove(id);
    };

    return (
        <div>
            {todos.map(item => (
                <div key={item.id} className='taskListItem'>
                    <span className='checkboxWrapper' onClick={onHandleChecked(item.id)}>
                        <ToDoCheckbox active={item.isCompleted} />
                    </span>
                    <p className='textWrapper'>
                        <span
                            className={classnames({
                                'strikethrough': item.isCompleted,
                            })}
                        >
                            {item.text}
                        </span>
                    </p>
                </div>
            ))}
        </div>
        );
  };

  export default  ToDoList;