import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const SingleTask = ({
  id,
  task,
  completed,
  removeTask,
  completedTask,
  setEditing,
}) => {
  return (
    <article className='task-item'>
      <input
        type='checkbox'
        name=''
        id=''
        checked={completed}
        onChange={() => completedTask(id)}
      />
      <p className='item-title' style={{ textDecoration: completed && 'line-through' }}>{task}</p>
      <div className='btn-container'>
        <button
          type='button'
          className='edit-btn'
          onClick={() => setEditing({ editingFlag:true , editID:id, editTask:task })}
        >
          <FaEdit />
        </button>
        <button
          type='button'
          className='delete-btn'
          onClick={() => removeTask(id)}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  );
};
export default SingleTask;
