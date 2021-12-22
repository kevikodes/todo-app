import React from "react";

const FilterControl = ({ activeFilter, setActiveFilter }) => {
  const handleStatus = (status) => {
    setActiveFilter(status);
  };
  return (
    <div className="item-statuses">
      <span
        className={activeFilter === "all" ? "active" : ""}
        onClick={() => handleStatus("all")}
      >
        All
      </span>
      <span
        onClick={() => handleStatus("active")}
        className={activeFilter === "active" ? "active" : ""}
      >
        Active
      </span>
      <span
        onClick={() => handleStatus("completed")}
        className={activeFilter === "completed" ? "active" : ""}
      >
        Completed
      </span>
    </div>
  );
};

export default FilterControl;
