import React from "react";
import "./App.css";

const Categories = ({ filterItems }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => filterItems("all")}>
        all
      </button>
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        breakfast
      </button>
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        breakfast
      </button>
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        breakfast
      </button>
    </div>
  );
};

export default Categories;
