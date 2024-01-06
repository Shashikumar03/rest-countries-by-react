import React from "react";

function FilterBySubRegion({ allSubregion, filterSubregion }) {
  function handleClick(event) {
    filterSubregion(event.target.text);
  }
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
        {allSubregion.map((subregion, index) => {
          return (
            <li key={index}>
              <a className="dropdown-item" href="#" onClick={handleClick}>
                {subregion}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FilterBySubRegion;
