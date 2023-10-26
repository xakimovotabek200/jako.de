import React from "react";
import "./JakoOnline.css"
import { useTranslation } from "react-i18next";


function JakoOnline() {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="online">
        <h1 className="onH1">{t("Home_jako_onlineshop")} </h1>
        <p className="lets">
          {t("Home_jako_onlineshop_text")}
        </p>
      </div>
    </div>
  );
}

export default JakoOnline;
