import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import getCountryDetailById from "../service/api-country-code";

function Details() {
  const { id } = useParams();
  const [country, setCountry] = useState();
  const [isError, setIsError] = useState("false");

  useEffect(() => {
    async function getData() {
      try {
        const data = await getCountryDetailById(id);

        setCountry(Object.values(data)[0]);
      } catch (error) {
        setIsError(true);
      }
    }
    getData();
  }, [id]);

  return (
    <>
      {isError == true ? (
        <p>no such Country exist</p>
      ) : country && isError ? (
        <div className="country-detail1">
          <img src={country ? country.flags : null} alt="" />
          <div className="country-detail-text1">
            <div className="country-name1">
              <h2>{country ? country.name : null}</h2>
            </div>
            <div className="country-left-details1">
              <p>
                <span className="details11">Native Name:</span>
                {country ? country["Native Name"] : null}
              </p>
              <p>
                <span className="details1">Population:</span>
                {country ? country.population : null}
              </p>
              <p>
                <span className="details1">Region:</span>
                {country ? country.Region : null}
              </p>
              <p>
                <span className="details1">Sub Region:</span>
                {country ? country.Subregion : null}
              </p>
              <p>
                <span className="details1">Capital:</span>
                {country ? country.Capital : null}
              </p>
            </div>
            <div className="top-level">
              <p>
                <span className="details1">Top Level Domain:</span>
                {country ? country["Top Level Domain"] : null}
              </p>
              <p>
                <span className="details1">Currencies:</span>
                {country ? country["Currency"] : null}
              </p>
              <p>
                <span className="details1">Langauge:</span>
                {country ? country["Language"] : null}
              </p>
            </div>
            <div className="border1">
              <div className="border-Text1">
                <h5>Border Countries</h5>
                {country ? (
                  country.borders.map((name, index) => {
                    return (
                      <div key={index} className="borderName">
                        {name}
                      </div>
                    );
                  })
                ) : (
                  <p>no border</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>searching</p>
      )}
    </>
  );
}

export default Details;
