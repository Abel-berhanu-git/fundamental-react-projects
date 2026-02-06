import { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';

const App = () => {
  // const storedValue = JSON.parse(localStorage.getItem('tasks')) ?? [];
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem('tasks')) ?? [],
  );
  const [editing, setEditing] = useState({
    editingFlag: false,
    editID: '',
    editTask: '',
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(editing);
  }, [tasks, editing]);

  // Add task
  const addTask = (task) => {
    const newTask = [...tasks, { id: nanoid(), task, completed: false }];
    setTasks(newTask);
    toast.success('Task add to the list');
  };

  // remove task
  const removeTask = (id) => {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
    toast.success(`Task deleted from the list`);
  };

  // completed task
  const completedTask = (id) => {
    const newTask = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    setTasks(newTask);
  };

  // edit Task
  const editTask = (id, editTask) => {
    const newTask = tasks.map((taskItem) =>
      taskItem.id === id ? { ...taskItem, task: editTask } : taskItem,
    );
    setTasks(newTask);
    toast.success('Task edited ');
  };

  return (
    <section className='section-center'>
      <TaskForm
        addTask={addTask}
        editing={editing}
        setEditing={setEditing}
        editTask={editTask}
      />
      <Task
        tasks={tasks}
        removeTask={removeTask}
        completedTask={completedTask}
        setEditing={setEditing}
      />
      <ToastContainer position='top-center' />
    </section>
  );
};

export default App;
