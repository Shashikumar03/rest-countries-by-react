import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import ErrorBoundary from "./ErrorBoundary";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Header from "../components/Header";
import Sorting from "../components/Sorting";
import FilterBySubRegion from "../components/FilterBySubRegion";
import SortByArea from "../components/SortByArea";

function Home() {
  const [searchedCountry, setSearchCountry] = useState();
  const [filterName, setFilterName] = useState();
  const [filter, setFilter] = useState();
  const [sortByOrder, setSortOrder] = useState();
  const [allSubRegion, setAllSubRegion] = useState([]);
  const [subregionName, setSubregionName] = useState();
  const [areaOrder, setAreaOrder] = useState();
  function searchByCountryName(searchedName) {
    setSearchCountry(searchedName);
  }

  function filterByRegion(selectedRegion) {
    setFilterName(selectedRegion);
  }
  function sorting(order) {
    setSortOrder(order);
  }

  function filterSubregion(name) {
    setSubregionName(name);
  }
  function sortByArea(order) {
    setAreaOrder(order);
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
            <SortByArea sortByArea={sortByArea} />
            <FilterBySubRegion
              allSubregion={allSubRegion}
              filterSubregion={filterSubregion}
            />
          </div>
        </section>

        <section className="countries-section1">
          <Card
            searched={searchedCountry}
            filtered={filterName}
            order={sortByOrder}
            setSubregion={setAllSubRegion}
            subregionName={subregionName}
            setSubregionName={setSubregionName}
            areaOrder={areaOrder}
          />
        </section>
      </main>
    </>
  );
}

export default Home;
