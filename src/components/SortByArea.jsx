import React, { useState } from "react";

function SortByArea({ sortByArea }) {
  function handleClick(event) {
    const sortingOrder = event.target.text.split(" ")[1];

    sortByArea(sortingOrder);
  }
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort By area
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#" onClick={handleClick}>
            by decs
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#" onClick={handleClick}>
            by asc
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SortByArea;
