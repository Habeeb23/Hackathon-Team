import React from "react";
import "./css/Card.css";
import host from "../images/Frame535.png";

function Card() {
  return (
    <>
      <div className="zcard">
        <div className="container">
          <img src={host} alt="" />
          <h3 className="ban-card">Rent & host home</h3>
          <ul className="bent">
            <li>Wide range of hosting and renting options</li>
            <li>Carefully curated properties for the best experience</li>
            <li>Top-notch customer service from experienced</li>
            <li>hosts Easy booking and payment process</li>
          </ul>
          <div className="btn">
            <button type="button" className="btn btn-primary">
              Start a journey<span className="bi bi-arrow-left-right"></span>
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
