import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleToggle = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleEdit = (editedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === editedTask.id) {
        return editedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="task-form">
        <div className="task-cont">
          <h1>Task Manager</h1>
          <TaskForm addTask={addTask} />
        </div>
        <img
          src="https://img.freepik.com/free-vector/tiny-business-people-responsibility-chart-with-tasks-raci-matrix-responsibility-assignment-matrix-linear-responsibility-chart-concept_335657-2430.jpg"
          alt="task"
          className="task-img"
        />
      </div>
      <TaskList
        tasks={tasks}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
