import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";

const data = [
  { id: 1, text: "Finish contacts hw", status: true },
  { id: 2, text: "Study react hooks", status: false },
  { id: 3, text: "Finish Clever programmer challenge", status: false },
  { id: 4, text: "Run 1 mile", status: false },
  { id: 5, text: "Finish errands", status: false },
  { id: 6, text: "Complete Todo App", status: false },
];

function App() {
  // Create a state that holds the data arr
  const [tasks, setTasks] = useState(data);

  // #6 create a state that holds the current filterStatus
  const [activeFilter, setActiveFilter] = useState("all");

  // #10a Create a state that holds filteredTasks and map through that instead of tasks in TaskList.js
  const [filteredTask, setFilteredTask] = useState(tasks);
  // #7 useEffect that has a handleFilter() function
  useEffect(() => {
    const handleFilter = () => {
      if (activeFilter === "active") {
        return setFilteredTask(tasks.filter((task) => task.status === false));
      } else if (activeFilter === "completed") {
        return setFilteredTask(tasks.filter((task) => task.status === true));
      } else {
        return setFilteredTask(tasks);
      }
    };
    handleFilter();
  }, [tasks, activeFilter]);
  // #7b Handle function should have a if statement that depending on the filterStatus it will setFilteredTasks() with the filtered tasks

  //I can see the updated tasks

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <div className="title">TODO</div>
          <div className="theme">
            <img src="./images/icon-sun.svg" alt="theme" />
          </div>
        </div>
        {/* Add a todo item to the tasks */}
        <TaskInput tasks={tasks} setTasks={setTasks} />

        {/* Component that holds the task list */}
        {/* #10b pass down filterStatus, setFilterStatus, filteredTasks to the component */}
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
          filteredTask={filteredTask}
          setFilteredTask={setFilteredTask}
        />
      </div>
    </div>
  );
}

export default App;
