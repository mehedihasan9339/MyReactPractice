// In App.jsx

import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React Fundamentals", completed: false },
    { id: 2, text: "Build a Demo App", completed: true },
    { id: 3, text: "Connect to a .NET API", completed: false },
  ]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // নতুন ফাংশন: কাজ ডিলিট করার জন্য
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // নতুন ফাংশন: কাজ টগল করার জন্য
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>My Task Manager</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask} // নতুন prop পাস করুন
      />
    </div>
  );
}

export default App;
