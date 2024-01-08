import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  return (
    <>
      <button type="button" className="back-button" onClick={handleClick}>
        Back Button
      </button>
    </>
  );
}

export default BackButton;
