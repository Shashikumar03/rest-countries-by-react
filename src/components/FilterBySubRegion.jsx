import React from "react";

function FilterBySubRegion() {
  function handleClick() {}
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        filter by Subregion
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#" onClick={handleClick}></a>
        </li>
      </ul>
    </div>
  );
}

export default FilterBySubRegion;
