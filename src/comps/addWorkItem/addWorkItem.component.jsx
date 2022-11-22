import React from "react";
import "./style.css";
export const AddWorkItem = ({ addTask }) => {
  const [newTask, setNewTask] = React.useState("");
  const handleTask = (eventOnChange) => {
    setNewTask(eventOnChange.target.value);
  };
  const handleInput = () => {
    document.getElementsByTagName("input")[0].value = "";
  };
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add new task"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        onChange={handleTask}
      />
      <button
        onClick={() => {
          addTask(newTask);
          handleInput();
        }}
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Add Task
      </button>
    </div>
  );
};
