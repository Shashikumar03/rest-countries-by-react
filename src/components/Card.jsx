import { useState, useEffect } from "react";
import api from "../service/api";
import CardView from "./CardView";
import { Link } from "react-router-dom";
function Card({ dataRendering }) {
  return (
    <>
      <div className="container1" id="firstDiv">
        {dataRendering.length >= 1 ? (
          dataRendering.map((country, index) => {
            return (
              <Link to={`/country/${country.code}`} key={index}>
                <div className="country" id={index}>
                  <CardView country={country} />
                </div>
              </Link>
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
