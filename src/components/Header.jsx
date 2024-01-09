import React from "react";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
function Header() {
  function toggleDarkMode() {
    console.log("shashi");
  }
  return (
    <>
      <header>
        <nav className="header-navbar">
          <div className="header-container">
            <h2>Where in the world?</h2>

            <p>
              <span className="moon" onClick={toggleDarkMode}>
                <ModeNightIcon />
              </span>
              Dark Mode
            </p>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
