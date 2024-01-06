import React from "react";

function Navbar() {
  return (
    <>
      <div className="Header-container">
        <header>
          <nav className="header-navbar">
            <div className="header-container">
              <h2>Where in the world?</h2>

              <p>
                <span className="moon">
                  <i className="fa-regular fa-moon"></i>
                </span>
                Dark Mode
              </p>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Navbar;
