import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function Search({ searchCountry }) {
  function handleInputSearch(event) {
    searchCountry(event.target.value);
  }

  return (
    <>
      <div className="d-flex search">
        <span className="search-icon">
          <SearchIcon />
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
