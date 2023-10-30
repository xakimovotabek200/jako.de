import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Banner.css";

function Banner() {
  const [Bannerdata, setBannerData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.abdullajonov.uz/legend-backend-api/api/main-page-news/get');
        setBannerData(response.data.data);
        console.log(response.data.data, "bannerData");
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      {
        Array.isArray(Bannerdata) && Bannerdata.map((item) => { // Use Bannerdata in the map function
          return (
            <div key={item.id}>
              <div className="banner-image">
                <div className="text">
                  <h3 className="w-[600px]">
                    {t("Home_banne_text")} <br />
                  </h3>
                  <Link to={"/offer"}>
                    <button className="btn">Buy Now</button>
                  </Link>
                </div>
              </div>
              <div className="res_z">
                <img
                  src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${item.image}`}
                  alt=""
                />
                <div className="res_Zz">
                  <div className="g">
                    <h3 className="h">
                      {item.text} <br />
                    </h3>
                    {/* <h3 className="r">READY FOR COLD DAYS</h3> */}
                  </div>

                  <Link to={"/offer"}>
                    <button className="btnz">Buy Now</button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Banner;
