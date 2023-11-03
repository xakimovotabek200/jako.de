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
            <h3 className="w-[600px] text-white">
              {bannerdata.text}
            </h3>
            <Link to={"/offer"}>
              <button className="btn">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
