// In TaskList.jsx

import Task from "./Task";

function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  // onDeleteTask prop গ্রহণ করুন
  return (
    <div className="task-list">
      <h2>My Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDeleteTask}
            onToggle={onToggleTask} // onToggle নামে নিচে পাস করুন
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
