import React from "react";

import { AddWorkItem } from "../addWorkItem/addWorkItem.component";
import { WorkItem } from "../WorkItem/workItem.component";
import "./style.css";

export const ToDoList = () => {
  const [tasks, setTasks] = React.useState([]);
  const handleAddTask = () => {
    if (tasks.length === 0) {
      return <h4>No tasks found</h4>;
    } else {
      return tasks.map((item) => {
        console.log(item);
        return (
          <WorkItem
            task={item.task}
            handleRemoveTask={handleRemoveTask}
            id={item.id}
          />
        );
      });
    }
  };

  const handleRemoveTask = (task, id) => {
    let newTasks = tasks.filter((item) => item.task !== task || item.id !== id);
    setTasks(newTasks);
  };

  const addTask = (eventOnClick) => {
    let newTask = { task: eventOnClick, id: tasks.length + 1 };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="todo-list">
      <div className="title">
        <h2> Today work items that should be done</h2>
      </div>
      <div className="add-work-item">
        <AddWorkItem addTask={addTask} />
      </div>
      <div className="work-items">{handleAddTask()}</div>
    </div>
  );
};
