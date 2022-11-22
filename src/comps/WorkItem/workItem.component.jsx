import React from "react";
import "./style.css";

export const WorkItem = ({ task, handleRemoveTask, id }) => {
  return (
    <div className="card text-center">
      <div className="card-header">Task</div>
      <div className="card-body">
        <h5 className="card-title">{task}</h5>

        <button
          onClick={() => handleRemoveTask(task, id)}
          className="btn btn-primary"
        >
          Done
        </button>
      </div>
    </div>
  );
};
