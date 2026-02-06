import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const TaskForm = ({ addTask, editing, setEditing, editTask }) => {
  const [task, setTask] = useState('');

  useEffect(() => {
    editing.editingFlag && setTask(editing.editTask);
  }, [editing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && !editing.editingFlag) {
      addTask(task);
      setTask('');
      setEditing({ editingFlag: false, editID: '', editTask: '' });
    } else if (task && editing.editingFlag) {
      editTask(editing.editID, task);
      setEditing({ editingFlag: false, editID: '', editTask: '' });
      setTask('');
    } else {
      toast.error('please provide value');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Task manager</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type='submit' className='btn'>
          {editing.editingFlag ? 'edit' : 'add'}
        </button>
      </div>
    </form>
  );
};
export default TaskForm;
