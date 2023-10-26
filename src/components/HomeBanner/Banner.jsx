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
      <div className="res_z">
        <img
          src="https://cdn.jako.de/userdata/images/Startseite/2023_JAKO_Mobile_Teamline-Sale_2022_480x480px.jpg"
          alt=""
        />
        <div className="res_Zz">
          <div className="g">
            <h3 className="h">
              30% OFF SELECTED AUTUMN ARTICLES <br />
            </h3>
            <h3 className="r">READY FOR COLD DAYS</h3>
          </div>

          <Link to={"/offer"}>
            <button className="btnz">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
