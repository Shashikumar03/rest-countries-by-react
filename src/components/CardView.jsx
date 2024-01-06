import React from "react";



function CardView(probs) {
  const { name, population, region, capital, flag } = probs.data;
  return (
    <>
      <img src={flag} alt="" />
      <div className="country-detail-text">
        <div className="country-name">
          <h2>{name}</h2>
        </div>
        <div className="country-left-details">
          <p>
            <span className="details">Population:</span>
            {population}
          </p>
          <p>
            <span className="details">Region:</span>
            {region}
          </p>
          <p>
            <span className="details">Capital:</span>
            {capital}
          </p>
        </div>
      </div>
    </>
  );
}

export default CardView;
