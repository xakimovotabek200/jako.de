import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="container mx-auto">
      <div className="banner-image">
        <div className="text">
          <h3>
            30% OFF SELECTED AUTUMN ARTICLES <br />
          </h3>
          <h3>READY FOR COLD DAYS</h3>
          <Link to={"/offer"}>
            <button className="btn">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
