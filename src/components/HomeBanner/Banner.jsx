import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./Banner.css";

const API_URL =
  "https://api.abdullajonov.uz/legend-backend-api/api/main-page-news/get";

function Banner() {
  const [bannerdata, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setBannerData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <p>Error fetching data: {error.messaje}</p>;
  }

  return (
    <div className="container mx-auto">
      {bannerdata.map((banner) => (
        <div key={banner.id}>
          <div className="banner-image">
            <div className="relative">
              <img
                style={{ width: "100%", height: "550px", objectFit: "cover" }}
                src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${banner.image}`}
                alt={banner.text}
              />
            </div>
            <div className="text absolute top-40">
              <h3 className="w-[600px] text-black">{banner.text}</h3>
              <Link to={"/offer"}>
                <button className="btn">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="res_z container mx-auto p-5">
        <img
          src={`https://cdn.jako.de/userdata/images/Startseite/2023_JAKO_Mobile_TeamDays_2022_480x480px_EN.jpg`}
          alt={bannerdata[0]?.text}
        />
        <div className="res_Zz">
          <div className="g">
            <h3 className="h">
              {bannerdata[0]?.text} 30% OFF SELECTED AUTUMN ARTICLES <br />
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
