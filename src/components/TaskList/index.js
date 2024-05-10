import React, { useState } from "react";
import Task from "../Task";
import "./index.css";

function TaskList({ tasks, onDelete, onToggle, onEdit }) {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("default");

  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((task) =>
          filter === "completed" ? task.completed : !task.completed
        );

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sort === "priority") {
      if (a.priority === b.priority) {
        return a.dueDate.localeCompare(b.dueDate);
      }
      return a.priority.localeCompare(b.priority);
    } else if (sort === "dueDate") {
      return a.dueDate.localeCompare(b.dueDate);
    }
    return 0;
  });

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const number = filteredTasks.length;
  return (
    <div>
      <div className="filter-header">
        <div className="heading">
          <h1>Assigned Task</h1>
          <p className="count">{number}</p>
        </div>

        <div className="filters">
          <div style={{ marginRight: "10px" }}>
            <label htmlFor="filter">Filter:</label>
            <select id="filter" value={filter} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <div>
            <label htmlFor="sort">Sort:</label>
            <select id="sort" value={sort} onChange={handleSortChange}>
              <option value="default">Default</option>
              <option value="priority">Priority</option>
              <option value="dueDate">Due Date</option>
            </select>
          </div>
        </div>
      </div>
      <div className="task-list">
        {sortedTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
