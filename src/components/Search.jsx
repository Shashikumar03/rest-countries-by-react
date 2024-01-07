import React, { useState } from "react";

function Search({ searchCountry }) {
  function handleInputSearch(event) {
    searchCountry(event.target.value);
  }

  return (
    <>
      <div className="d-flex search">
        <span className="search-icon">
          <i className="fas fa-search gray-icon"></i>
        </span>
        <input
          id="search"
          type="text"
          className="form-control border-"
          placeholder="Search for a country..."
          onChange={handleInputSearch}
        />
      </div>
    </>
  );
}

export default Search;
