import React from "react";

function Sorting({ sort }) {
  function handleClick(event) {
    const selectedValue = event.target.text.split(" ");
    if (selectedValue.includes("asc")) {
      sort("asc");
    } else {
      sort("desc");
    }
  }
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort by population
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#" onClick={handleClick}>
            Sort by population decs
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#" onClick={handleClick}>
            Sort by population asc
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sorting;
