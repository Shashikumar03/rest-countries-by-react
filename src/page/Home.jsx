import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import ErrorBoundary from "./ErrorBoundary";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Header from "../components/Header";
import Sorting from "../components/Sorting";
import FilterBySubRegion from "../components/FilterBySubRegion";

function Home() {
  const [searchedCountry, setSearchCountry] = useState();
  const [filterName, setFilterName] = useState();
  const [filter, setFilter] = useState();
  const [sortByOrder, setSortOrder] = useState();
  function searchByCountryName(searchedName) {
    setSearchCountry(searchedName);
  }

  function filterByRegion(selectedRegion) {
    setFilterName(selectedRegion);
  }
  function sorting(order) {
    setSortOrder(order);
  }

  return (
    <>
      <Header />

      <main>
        <section id="search-and-filter-section">
          <div className="search-and-filter">
            <Search searchCountry={searchByCountryName} />
            <Filter filterByRegion={filterByRegion} />
            <Sorting sort={sorting} />
            <FilterBySubRegion />
          </div>
        </section>

        <section className="countries-section1">
          <Card
            searched={searchedCountry}
            filtered={filterName}
            order={sortByOrder}
          />
        </section>
      </main>
    </>
  );
}

export default Home;
