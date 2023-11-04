import React, { useEffect, useState } from "react";
import "./JakoOnline.css";
import { useTranslation } from "react-i18next";
import axios from "axios"; // Import axios for making API requests

function JakoOnline() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.abdullajonov.uz/legend-backend-api/api/history/get"
      );
      const data = response.data.histories;
      setData(data);
    } catch (error) {
      console.error(error); // Properly handle and log the error
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="">
      <div className="online">
        <h1 className="onH1">{t("Home jakoon lineshop")}</h1>
        {Array.isArray(data) &&
          data?.map((item, index) => (
            <p className="lets container mx-auto p-2" key={index}>
              {item.text}
            </p>
          ))}
      </div>
    </div>
  );
}

export default JakoOnline;
