import React from "react";
import "./Join.css";
import Res from "../../../img/JoinImg.jpg";
import { useTranslation } from "react-i18next";


function JoinDAnPAsti() {
  const { t } = useTranslation();

  return (
    <div className="nom">
      <div className="all">
        <div className="Harf">
          <h2 className="club">
            {t("Home_join_pasti")}
          </h2>
          <button className="become">{t("Home_join_button")}</button>
        </div>
      </div>
      <div className="res">
        <div className="res_ps">
          <div className="ps">
            <h1 className="w">
              {t("Home_join_pasti")}
            </h1>

          </div>
          <div className="bec">{t("Home_join_button")}</div>
        </div>
      </div>
    </div>
  );
}

export default JoinDAnPAsti;
