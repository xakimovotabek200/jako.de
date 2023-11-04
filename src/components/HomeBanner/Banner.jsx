import axios from "axios";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Banner.css";

function Banner() {
  const [bannerdata, setBannerData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.abdullajonov.uz/legend-backend-api/api/main-page-news/get"
        );
        setBannerData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <div key={bannerdata.id}>
        <div className="banner-image">
          <div className="relative">
            <img
              style={{ width: "100%", height: "550px", objectFit: "cover" }}
              src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${bannerdata.image}`}
              alt={bannerdata.image}
            />
          </div>
          <div className="text absolute top-40">
            <h3 className="w-[600px] text-white">{bannerdata.text}</h3>
            <Link to={"/offer"}>
              <button className="btn">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="res_z container mx-auto p-5">
        <img
          src={`https://cdn.jako.de/userdata/images/Startseite/2023_JAKO_Mobile_TeamDays_2022_480x480px_EN.jpg`}
          alt={bannerdata.image}
        />
        <div className="res_Zz">
          <div className="g">
            <h3 className="h">
              {bannerdata.text} 30% OFF SELECTED AUTUMN ARTICLES <br />
            </h3>
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
