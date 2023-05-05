import React from "react";
import "./css/Hero.css";

function Hero() {
  return (
    <>
      <div className="banner px4 py-5 my-0 text-center">
        <h1>Find your perfect space with ease.</h1>
        <h5 className="display-4 fw-bold ">
          Our app connects you with trusted real estate agents and homeowners,
          simplifying your search for the best<br></br> listings. Whether you're
          buying, renting, or traveling, our app streamlines the process and
          eliminates wasted <br></br>time. Say goodbye to endless scrolling -
          let us make home easy."
        </h5>
        <div className="contact-button">
          <button type="button" className="btn btn-primary btn">
            Create an account
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
