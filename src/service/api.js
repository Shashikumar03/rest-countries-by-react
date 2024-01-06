import React from "react";
import axios from "axios";

function api() {
  const countryCode = {};
  return axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => {
      if (response.statusText !== "OK") {
        throw Error("data is not receive");
      } else {
        return response.data;
      }
    })
    .then((countries) => {
      return countries.reduce((accumulator, countryData) => {
        countryCode[countryData.name.common] = countryData.cca3;

        accumulator[countryData.name.common] = {};
        if (countryData.name.nativeName != undefined) {
          const nativeNameKeyArray = Object.keys(countryData.name.nativeName);

          const native = nativeNameKeyArray[nativeNameKeyArray.length - 1];
          const nativeNameOfficial =
            countryData.name.nativeName[native]["common"];

          accumulator[countryData.name.common]["Native Name"] =
            nativeNameOfficial;
        }
        if (countryData.borders)
          accumulator[countryData.name.common]["borders"] = countryData.borders;
        accumulator[countryData.name.common]["population"] =
          countryData.population;
        accumulator[countryData.name.common]["Region"] = countryData.region;
        accumulator[countryData.name.common]["Subregion"] =
          countryData.subregion;
        accumulator[countryData.name.common]["Capital"] = countryData.capital;
        accumulator[countryData.name.common]["Top Level Domain"] =
          countryData.tld;
        accumulator[countryData.name.common]["Area"] = countryData.area;
        //    accumulator[countryData.name.common]["capital"] = countryData.capital;

        if (
          countryData.currencies != null &&
          countries.currencies != undefined
        ) {
          const currencyArray = Object.keys(countryData.currencies);
          const currencyNameArray = [];
          currencyArray.forEach((currencyCode) => {
            const currecyName = countryData.currencies[currencyCode].name;
            currencyNameArray.push(currecyName);
          });
          accumulator[countryData.name.common]["Currency"] = currencyNameArray;
        }
        if (
          countryData.languages != null &&
          countryData.languages != undefined
        ) {
          accumulator[countryData.name.common]["Language"] = Object.values(
            countryData.languages
          );
        }
        accumulator[countryData.name.common]["flags"] = countryData.flags.png;
        return accumulator;
      }, {});
    })
    .catch((err) => err);
}

export default api;
