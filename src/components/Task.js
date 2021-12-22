import React, { useState } from "react";
import checkImage from "../images/icon-check.svg";

// #5 add tasks and setTasks as props will use later!
function Task({ task, tasks, setTasks }) {
  // #2 Create a useState of the mutableTask
  const [mutableTask, setMutableTask] = useState(task);

  const checked = mutableTask.status ? "checked" : "";
  const checkIcon = mutableTask.status ? (
    <img src={checkImage} alt="completed" />
  ) : (
    ""
  );

  // #3 Create a function that when click the task status will be true on the frontend and backend(data)
  const markCompleted = () => {
    setMutableTask({ ...mutableTask, status: !mutableTask.status });
    const updatedTasks = tasks.map((item) =>
      item.id === task.id ? { ...item, status: !item.status } : item
    );
    setTasks(updatedTasks);
  };
  return (
    <div className="todo-item">
      <div className="check" onClick={markCompleted}>
        {/* #4a Add a ternary that if the mutableTask is true add the class "checked" to it*/}
        <div className={`check-mark ${checked}`}>{checkIcon}</div>
      </div>
      <div className={`todo-text ${checked}`}>{task.text}</div>
    </div>
  );
}

export default Task;
