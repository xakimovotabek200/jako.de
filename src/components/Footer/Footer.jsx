import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Partners from "../Partners/Partners";
import "./Footer.css";
import { HoverCard, Text } from "@mantine/core";
import { Dropdown } from "antd";

function Footer() {
  const { t } = useTranslation();
  const [datas, setDatas] = useState([]);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.abdullajonov.uz/legend-backend-api/api/privacy-policy/get"
      );
      const data = response.data.data;
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchDatas = async () => {
    try {
      const response = await axios.get(
        "https://api.abdullajonov.uz/legend-backend-api/api/social-network/get"
      );
      const datas = response.data.data;
      setDatas(datas);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <div className="container mx-auto p-2">
      <section className="HrOne">
        <hr className="salom" />
        <div className="Just_One">
          <div className="JustFlex">
            <Partners />
          </div>
        </div>
        <hr className="salom" />
      </section>
      <div className="Js">
        <div className="hidden md:block section">
          <div className="one">
            <h1 className="h1">{t("Footer_title1")}</h1>
            <div className="link">
              <Link className="" to="/">
                {t("Footer_item1")}{" "}
              </Link>
            </div>
            <div className="link">
              <Link className="" to="/">
                {t("Footer_item2")}
              </Link>
            </div>
            <div className="link">
              {" "}
              <Link className="" to="/">
                {t("Footer_item3")}
              </Link>
            </div>
            <div className="link">
              <Link className="" to="/">
                {t("Footer_item4")}
              </Link>
            </div>
            <div className="link">
              {" "}
              <Link className="" to="/">
                {t("Footer_item5")}
              </Link>
            </div>
            <div className="link">
              <Link className="" to="/">
                {t("Footer_item6")}
              </Link>
            </div>
          </div>
          <div className="one">
            <h1 className="h1">{t("Footer_title2")}</h1>
            <div className="link">
              <Link className="" to="/">
                {t("Footer_title7")}
              </Link>
            </div>
            <div className="link">
              <Link className="" to="/">
                {t("Footer_item8")}
              </Link>
            </div>
            <div className="link">
              <Link className="" to="/">
                {t("Footer_item9")}
              </Link>
            </div>
            <div className="link">
              <Link className="" to="/">
                {t("Footer_item10")}
              </Link>
            </div>
            <div className="link">
              {" "}
              <Link className="" to="/">
                {t("Footer_title11")}
              </Link>
            </div>
            <div className="link">
              <Link className="" to="/">
                {t("Footer_title12")}
              </Link>
            </div>
          </div>
          <div className="one">
            <h1 className="h1">{t("Footer_title3")}</h1>
            <div className="link">
              <Link className="" to="/">
                {t("Footer_title11")}
              </Link>
            </div>
            <div className="link">
              <Link className="" to="/">
                {t("Footer_title12")}
              </Link>
            </div>
            <div className="link">
              {" "}
              <Link className="" to="/">
                Sustainability
              </Link>
            </div>
            <div className="link">
              <Link className="" to="/">
                Teams
              </Link>
            </div>
            <div className="link">
              {" "}
              <Link className="" to="/news">
                Newsblog
              </Link>
            </div>
            <div className="link">
              <Link className="" to="/">
                Media
              </Link>
            </div>
          </div>
        </div>
        <div className="left"></div>
        <div className="Mno">
          <h1 className="sa">{t("Footer_right")}</h1>
          <br />
          <h4 className="sd">{t("Footer_right2")}</h4>
          <br />
          <button className="now">{t("Footer_button")}</button>
        </div>
      </div>
      <hr className="salom" />
      <div className="Quit">
        <div className="exit_one text-center ">
          <h1 className="text-xs flex md:block">WE ARE TEAM</h1>
          {datas.map((item, index) => {
            return (
              <div key={index}>
                <Link to={item.link}>
                  <img
                    className="w-12 h-6 object-cover"
                    src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${item.icon}`}
                    alt="Hozircha apida xatolik bor"
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <div className="exit_two">
          {data.map((item, index) => (
            <ul key={index} className="">
              <li>
                <p>{item.text}</p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
