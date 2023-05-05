import React from "react";
import "./css/Logo.css";
import rent1 from "../images/Shopify (logo — Black).png";
import rent2 from "../images/Slack (logo — Black).png";
import rent3 from "../images/Adobe (logo — Black).png";
import rent4 from "../images/Airtable (logo — Black).png";

function Logo() {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={rent1} alt="road" />
          <img src={rent2} alt="road" />
          <img src={rent4} alt="road" />
          <img src={rent3} alt="road" />
        </div>
      </div>
    </>
  );
}

export default Logo;
