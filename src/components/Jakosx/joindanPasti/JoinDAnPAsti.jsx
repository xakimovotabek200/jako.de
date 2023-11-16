import React from "react";
import { useTranslation } from "react-i18next";
import "./Join.css";

function JoinDAnPAsti() {
  const { t } = useTranslation();

  return (
    <div className="nom">
      <div className="all">
        <div className="Harf">
          <h2 className="club">JOIN THE JAKO CLUB!</h2>
          <p className="text-2xl text-white">EXCLUSIVE DROPS AND SURPRISES AWAIT <br /> YOU.</p>
          <button className="become">{t("Home_join_button")}</button>
        </div>
      </div>
      <div className="res">
        <div className="res_ps">
          <div className="ps">
            <p className="w">{t("Home_join_pasti")}</p>
          </div>
          <button className="bec">{t("Home_join_button")}</button>
        </div>
      </div>
    </div>
  );
}

export default JoinDAnPAsti;
