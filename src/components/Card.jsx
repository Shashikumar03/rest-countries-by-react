import { useState, useEffect } from "react";
import api from "../service/api";
import CardView from "./CardView";
function Card(probs) {
  const [countriesData, setCountriesData] = useState({});
  const [countryOverview, setCountryOverview] = useState([]);
  const [allSubRegion, setAllSubRegion] = useState([]);
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
            };
            // setAllSubRegion((prevData) => {
            //   return [...prevData, allCountriesDetails[countryName].Subregion];
            // });

            // console.log(
            //   allCountriesDetails[countryName].Region,
            //   allCountriesDetails[countryName].Subregion
            // );
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

            setAllSubRegion(subregionObj);
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
  console.log(allSubRegion), "kkkk";

  if (probs.filtered !== undefined) {
    const filteredRegion = probs.filtered;
    detailsToDisplay = detailsToDisplay.filter((item) => {
      if (item.region === filteredRegion) {
        return item;
      }
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
  // console.log("shashi");

  return (
    <>
      <div className="conatiner1" id="firstDiv">
        {detailsToDisplay
          ? detailsToDisplay.map((country, index) => {
              return (
                <div className="country" key={index} id={index}>
                  <CardView data={country} />
                </div>
              );
            })
          : "Result not found"}
      </div>
    </>
  );
}

export default Card;
