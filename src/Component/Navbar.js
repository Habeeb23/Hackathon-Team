import React from "react";
import "./css/Navbar.css";
import rent1 from "../images/Vector.png";
// import rent2 from "../images/Frame558.png";
import Hero from "../Component/Hero";
// import Form from "../Component/Form";

function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="Nav">
            <div className="container-fluid">
              <img src={rent1} alt="" />
              <a className="navbar-brand" href="#">
                {" "}
                Nestquest
              </a>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="Nav-button">
                <button type="button" class="btn">
                  Sign in
                </button>
                <button type="button" class="btn">
                  Sign up
                </button>
              </div>
            </div>
            <Hero />

            {/* <Form /> */}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
