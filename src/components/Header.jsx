import React from "react";

function Header() {
  return (
    <>
      <header>
        <nav className="header-navbar">
          <div className="header-container">
            <h2>Where in the world?</h2>

            <p>
              <span className="moon">
                <i className="fa-regular fa-moon" aria-hidden="true"></i>
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
