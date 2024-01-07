import { useState, useEffect } from "react";
import api from "../service/api";
import CardView from "./CardView";
function Card({ dataRendering }) {
  return (
    <>
      <div className="conatiner1" id="firstDiv">
        {dataRendering.length >= 1 ? (
          dataRendering.map((country, index) => {
            return (
              <div className="country" key={index} id={index}>
                <CardView country={country} />
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
