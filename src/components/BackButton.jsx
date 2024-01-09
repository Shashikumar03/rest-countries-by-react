import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BackButton() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  return (
    <>
      <button type="button" className="back-button" onClick={handleClick}>
        <ArrowBackIcon /> Back Button
      </button>
    </>
  );
}

export default BackButton;
