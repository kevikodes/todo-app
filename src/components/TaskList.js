import React from "react";
import Task from "./Task";
import FilterControl from "./FilterControl";

// #10c destructure setTasks,filterStatus,setFilterStatus,filteredTasks
function TaskList({
  tasks,
  setActiveFilter,
  activeFilter,
  filteredTask,
  setFilteredTask,
  setTasks,
}) {
  // #12b Create a funciton called clearCompleted that will clear completed Tasks by updating the tasks with the filtered tasks, then reset the filterStatus("all")
  //   const updatedTasks = tasks.map((item) =>
  //   item.id === task.id ? { ...item, status: !item.status } : item
  // );
  // setTasks(updatedTasks);
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => task.status !== true));
  };
  return (
    <div className="todo-items-wrapper">
      <div className="todo-items">
        {/* #5 pass down tasks and setTasks for later! */}
        {/* #11 switch tasks.map to filteredTasks.map() */}
        {filteredTask.map((item) => {
          return (
            <Task task={item} key={item.id} tasks={tasks} setTasks={setTasks} />
          );
        })}
      </div>

      {/* Can be it's own component */}
      <div className="todo-items-info">
        <div className="items-left">
          <p> {tasks.length} items left</p>
        </div>

        {/* #8 Create a FilterControl component  and pass down filterStatus and setFilterStatus*/}
        <FilterControl
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
        />
        {/* #9 In FilterControl create a function that onClick the status gets set to the span that was clicked */}

        <div className="items-clear">
          {/* #12a create an onClick that runs a function to clear completed tasks */}
          <span onClick={clearCompleted}>Clear Completed</span>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
