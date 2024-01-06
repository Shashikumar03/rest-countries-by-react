import React from "react";

function Filter({ filterByRegion }) {
  function handleClick(event) {
    const selectRegion = event.target.text;
    filterByRegion(selectRegion);
  }
  return (
    <div className="dropdown" id="dropdown">
      <button
        className="btn btn-secondary bg-white text-black"
        type="button"
        id="filter"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter by Region
        <span className="fas fa-chevron-down ps-5 align-self-center" />
      </button>
      <ul className="dropdown-menu">
        <li>
          <a
            className="dropdown-item"
            value="Africa"
            role="button"
            href="#"
            onClick={handleClick}
          >
            Africa
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            value="America"
            role="button"
            href="#"
            onClick={handleClick}
          >
            Americas
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            value="Antarctic"
            href="#"
            role="button"
            onClick={handleClick}
          >
            Antarctic
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            value="Asia"
            href="#"
            role="button"
            onClick={handleClick}
          >
            Asia
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            value="Europe"
            href="#"
            onClick={handleClick}
          >
            Europe
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            value="Oceania"
            href="#"
            role="button"
            onClick={handleClick}
          >
            Oceania
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            value="none"
            href="#"
            role="button"
            onClick={handleClick}
          >
            No fiter
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
