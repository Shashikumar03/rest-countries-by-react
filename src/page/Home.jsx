import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import ErrorBoundary from "./ErrorBoundary";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Header from "../components/Header";
import Sorting from "../components/Sorting";
import FilterBySubRegion from "../components/FilterBySubRegion";
import SortByArea from "../components/SortByArea";
import api from "../service/api";
import LinearBuffer from "../components/LinearBuffer";
import CircularIndeterminate from "../components/CircularIndeterminate";

function Home() {
  const [reservedData, setReservedData] = useState();
  const [countriesData, setCountriesData] = useState();
  const [dataRendering, setDataRedendering] = useState([]);
  const [dataFilterByRegion, setDataFilterByRegion] = useState([]);
  const [dataFilterBySubregion, setDataFilterBySubregion] = useState([]);
  const [searchBoolean, SetSearchBoolean] = useState(true);
  const [spinnerBoolean, setSpinnerBoolean] = useState(false);

  const [allSubregionList, setAllSubRegionList] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const allCountriesDetails = await api();
        setCountriesData(allCountriesDetails);
        setDataRedendering(Object.values(allCountriesDetails));
        setReservedData(Object.values(allCountriesDetails));
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  // filter by region
  function filterByRegion(selectedRegion) {
    setDataFilterBySubregion([]);
    let allSubregionArr = [];

    const countryFilterByRegion = reservedData.filter((country) => {
      if (selectedRegion === country.Region) {
        if (!allSubregionArr.includes(country.Subregion)) {
          allSubregionArr.push(country.Subregion);
        }
        return country;
      }
    });

    setAllSubRegionList(allSubregionArr);
    setDataRedendering(countryFilterByRegion);
    setDataFilterByRegion(countryFilterByRegion);
  }
  console.log(reservedData);
  //  sort by population
  function sortingByPopulation(order) {
    var data = [...dataRendering];
    let detailsToDisplay = [];
    if (order === "asc") {
      detailsToDisplay = data.sort((a, b) => {
        return a.population - b.population;
      });
    } else {
      detailsToDisplay = data.sort((a, b) => {
        return b.population - a.population;
      });
    }

    setDataRedendering(detailsToDisplay);
  }

  // sort by area
  function sortByArea(order) {
    var data = [...dataRendering];
    let detailsToDisplay = [];

    if (order === "asc") {
      detailsToDisplay = data.sort((a, b) => {
        return a.Area - b.Area;
      });
    } else {
      detailsToDisplay = data.sort((a, b) => {
        return b.Area - a.Area;
      });
    }

    setDataRedendering(detailsToDisplay);
  }

  // filter by subregion
  function filterSubregion(name) {
    const filterBySubregion = dataFilterByRegion.filter((item) => {
      if (item.Subregion === name) {
        return item;
      }
    });

    setDataRedendering(filterBySubregion);
    setDataFilterBySubregion(filterBySubregion);
  }

  // searching by countryName
  function searchByCountryName(searchedName) {
    setSpinnerBoolean(true);
    if (dataFilterBySubregion.length > 0) {
      const a = dataFilterBySubregion.filter((country) => {
        if (country.name.toLowerCase().includes(searchedName.toLowerCase())) {
          return country;
        }
      });
      if (a.length < 1) {
        SetSearchBoolean(false);
      }
      setTimeout(() => {
        setSpinnerBoolean(false);
      }, 2000);
      setDataRedendering(a);
    } else if (dataFilterByRegion.length > 0) {
      const a = dataFilterByRegion.filter((country) => {
        if (country.name.toLowerCase().includes(searchedName.toLowerCase())) {
          return country;
        }
      });
      if (a.length < 1) {
        SetSearchBoolean(false);
      } else {
        SetSearchBoolean(true);
      }
      setTimeout(() => {
        setSpinnerBoolean(false);
      }, 2000);
      setDataRedendering(a);
    } else {
      const a = reservedData.filter((country) => {
        if (country.name.toLowerCase().includes(searchedName.toLowerCase())) {
          return country;
        } else {
          SetSearchBoolean(true);
        }
      });
      if (a.length < 1) {
        SetSearchBoolean(false);
      } else {
        SetSearchBoolean(true);
      }
      setTimeout(() => {
        setSpinnerBoolean(false);
      }, 2000);
      setDataRedendering(a);
    }
  }

  return (
    <>
      <Header />

      <main>
        <section id="search-and-filter-section">
          <div className="search-and-filter">
            <Search searchCountry={searchByCountryName} />
            <Filter filterByRegion={filterByRegion} />
            <Sorting sort={sortingByPopulation} />
            <SortByArea sortByArea={sortByArea} />
            <FilterBySubRegion
              allSubregion={allSubregionList}
              filterSubregion={filterSubregion}
            />
          </div>
        </section>

        <section className="countries-section1">
          {countriesData && searchBoolean ? (
            <Card dataRendering={dataRendering} />
          ) : searchBoolean ? (
            <LinearBuffer />
          ) : spinnerBoolean ? (
            <CircularIndeterminate />
          ) : (
            <p>No such Country Found</p>
          )}
        </section>
      </main>
    </>
  );
}

export default Home;
