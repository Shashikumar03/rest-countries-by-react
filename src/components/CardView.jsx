import React from "react";

function CardView({ country }) {
  return (
    <>
      <img src={country.flags} alt="" />
      <div className="country-detail-text">
        <div className="country-name">
          <h2>{country.name}</h2>
        </div>
        <div className="country-left-details">
          <p>
            <span className="details">Population:</span>
            {country.population}
          </p>
          <p>
            <span className="details">Region:</span>
            {country.Region}
          </p>
          <p>
            <span className="details">Capital:</span>
            {country.Capital}
          </p>
        </div>
      </div>
    </>
  );
}

export default CardView;
