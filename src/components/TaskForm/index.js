import React, { useState } from "react";

import "./index.css";
function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      dueDate,
      completed: status === "completed",
    };
    addTask(newTask);
    setTitle("");
    setDescription("");
    setPriority("low");
    setDueDate("");
    setStatus("pending");
  };

  return (
    <form onSubmit={handleSubmit} className="task-container">
      <div className="input-container">
        <label htmlFor="title" className="title">
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
          className="input-title"
        />
      </div>
      <div className="input-container">
        <label htmlFor="description" className="Description">
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
        />
      </div>
      <div className="input-cont">
        <div className="input-container">
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="date"
          />
        </div>
      </div>
      <div className="status-container">
        <label htmlFor="status">Completion Status:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div>
        <button className="submit-button" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
