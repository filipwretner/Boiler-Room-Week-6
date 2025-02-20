import React from "react";

function Filter({ filter, onFilterChange, placeholder = "Sök..." }) {
  return (
    <div className="filter-container">
      <input
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder={placeholder}
        className="filter-input"
      />
    </div>
  );
}

export default Filter;