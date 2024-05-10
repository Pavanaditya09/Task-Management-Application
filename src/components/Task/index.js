import React, { useState } from "react";

import "./index.css";
function Task({ task, onDelete, onToggle, onEdit }) {
  const { id, title, description, priority, dueDate, completed } = task;
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedTask(task);
  };

  const handleSaveEdit = () => {
    onEdit({
      ...editedTask,
      completed:
        editedTask.completed === "true" || editedTask.completed === true,
    });
    setEditMode(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={`task ${completed ? "completed" : ""}`}>
      {editMode ? (
        <div>
          <div className="input-container">
            <label htmlFor="title" className="title">
              Title:
            </label>
            <input
              type="text"
              name="title"
              value={editedTask.title}
              onChange={handleChange}
              id="title"
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
              name="description"
              value={editedTask.description}
              onChange={handleChange}
            />
          </div>
          <div className="input-cont">
            <div className="input-container">
              <label htmlFor="priority">Priority:</label>
              <select
                id="priority"
                name="priority"
                value={editedTask.priority}
                onChange={handleChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="input-container">
              <label htmlFor="dueDate">Due Date:</label>
              <input
                id="dueDate"
                type="date"
                name="dueDate"
                value={editedTask.dueDate}
                onChange={handleChange}
                className="date"
              />
            </div>
            <div className="input-container">
              <label htmlFor="status">Status:</label>
              <select
                id="status"
                name="completed"
                value={editedTask.completed}
                onChange={handleChange}
              >
                <option value="false">Pending</option>
                <option value="true">Completed</option>
              </select>
            </div>
          </div>
          <div className="buttons-cont">
            <button className="submit-button btn" onClick={handleSaveEdit}>
              Save
            </button>
            <button className="submit-button" onClick={handleCancelEdit}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>Description : {description}</p>
          <p>Priority: {priority}</p>
          <p>Due Date: {dueDate}</p>
          <p>Completion Status : {completed ? "Completed" : "Pending"}</p>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggle(id)}
          />
          <button className="submit-button btn" onClick={handleEdit}>
            Edit
          </button>
          <button className="submit-button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default Task;
