import SingleTask from './SingleTask';

const Task = ({ tasks, removeTask, completedTask, setEditing }) => {
  return (
    <div className='items'>
      {tasks.map((task) => {
        return (
          <SingleTask
            key={task.id}
            {...task}
            removeTask={removeTask}
            completedTask={completedTask}
            setEditing={setEditing}
          />
        );
      })}
    </div>
  );
};
export default Task;
