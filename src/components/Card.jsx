import { useState, useEffect } from "react";
import api from "../service/api";
import CardView from "./CardView";
function Card(probs) {
  const [countriesData, setCountriesData] = useState({});
  const [countryOverview, setCountryOverview] = useState([]);
  const [subregionByRegion, setSubregionByRegion] = useState();
  const [subRegion, setSubregion] = useState();
  let subregionObj = {};

  useEffect(() => {
    async function getData() {
      try {
        const allCountriesDetails = await api();

        setCountriesData(allCountriesDetails);

        const overViewData = Object.keys(allCountriesDetails).reduce(
          (accumulator, countryName) => {
            const a = allCountriesDetails[countryName].Subregion;

            let data = {
              name: countryName,
              population: allCountriesDetails[countryName].population,
              region: allCountriesDetails[countryName].Region,
              flag: allCountriesDetails[countryName].flags,
              capital: allCountriesDetails[countryName].Capital,
              subregion: allCountriesDetails[countryName].Subregion,
              area: allCountriesDetails[countryName].Area,
            };

            if (subregionObj[allCountriesDetails[countryName].Region]) {
              if (
                !subregionObj[allCountriesDetails[countryName].Region].includes(
                  allCountriesDetails[countryName].Subregion
                )
              )
                subregionObj[allCountriesDetails[countryName].Region].push(
                  allCountriesDetails[countryName].Subregion
                );
            } else {
              subregionObj[allCountriesDetails[countryName].Region] = [];
              subregionObj[allCountriesDetails[countryName].Region].push(
                allCountriesDetails[countryName].Subregion
              );
            }
            setSubregionByRegion(subregionObj);
            // probs.setSubregion(subregionObj);
            accumulator.push(data);

            return accumulator;
          },
          []
        );

        setCountryOverview(overViewData);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  let detailsToDisplay = countryOverview;
  let subRegionToDisplay;
  if (probs.filtered !== undefined) {
    const filteredRegion = probs.filtered;
    detailsToDisplay = countryOverview.filter((item) => {
      if (item.region === filteredRegion) {
        return item;
      }
    });

    for (let key in subregionByRegion) {
      if (key === probs.filtered) {
        subRegionToDisplay = subregionByRegion[key];
      }
    }

    probs.setSubregion(subRegionToDisplay);
  }
  let aaa;
  if (probs.subregionName != undefined) {
    setSubregion(probs.subregionName);
    // console.log(probs.subregionName, "subregionname");
    console.log(probs.subregionName, "ggggg");
    detailsToDisplay = detailsToDisplay.filter((item) => {
      if (item.subregion === subRegion) {
        return item;
      }
      // probs.setSubregionName(undefined);
      aaa = probs.subregion;
    });
  }

  if (probs.searched !== undefined) {
    detailsToDisplay = detailsToDisplay.filter((item) => {
      const nameToSearch = probs.searched.toLowerCase();

      if (item.name.toLowerCase().includes(nameToSearch)) {
        return item;
      }
    });
  }
  if (probs.areaOrder !== undefined) {
  }

  if (probs.order !== undefined) {
    if (probs.order === "asc") {
      detailsToDisplay = detailsToDisplay.sort((a, b) => {
        return a.population - b.population;
      });
    } else {
      detailsToDisplay = detailsToDisplay.sort((a, b) => {
        return b.population - a.population;
      });
    }
  }

  return (
    <>
      <div className="conatiner1" id="firstDiv">
        {detailsToDisplay.length >= 1 ? (
          detailsToDisplay.map((country, index) => {
            return (
              <div className="country" key={index} id={index}>
                <CardView data={country} />
              </div>
            );
          })
        ) : (
          <h1>No such Data Found</h1>
        )}
      </div>
    </>
  );
}

export default Card;
