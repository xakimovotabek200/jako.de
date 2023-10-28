import React from "react";
import { Link } from "react-router-dom";
import HightLights from "../../components/Higtlights/HightLights";
import Men1 from "./Legend1.jpg";
import Men2 from "./Legend.jpg";
import Men3 from "./Legendkids4.jpg";
import "./Kids.css";
function Mens() {
  return (
    <div>
      <div className="Men">
        <h1 className="men">Kids</h1>
        <div className="card">
          <div className="cardla">
            <img className="img" src={Men2} alt="" />
            <li>
              <Link className="aw" to="/">
                Men sportswear
              </Link>
            </li>
          </div>
          <div className="cardla">
            <img className="img" src={Men1} alt="" />
            <li>
              <Link className="aw" to="/">
                Men sportswear
              </Link>
            </li>
          </div>
          <div className="cardla">
            <img className="img" src={Men3} alt="" />
            <li>
              <Link className="aw" to="/">
                Men sportswear
              </Link>
            </li>
          </div>
        </div>
      </div>
      <HightLights />
      <div className="card">
        <div className="cardla">
          <img
            className="img"
            src="https://cdn.Legend.de/userdata/images/Einkaufswelten/Kinder/Einkaufswelten_Kinder_Trainingsjacken_900x674px.jpg"
            alt=""
          />
          <li>
            <Link className="aw" to="/">
              Men sportswear
            </Link>
          </li>
        </div>
        <div className="cardla">
          <img
            className="img"
            src="https://cdn.Legend.de/userdata/images/Einkaufswelten/Kinder/Legend_2023_Bildzuschnitte_Homepage_900x674px_Kinder%20T-Shirts.jpg"
            alt=""
          />
          <li>
            <Link className="aw" to="/">
              Men sportswear
            </Link>
          </li>
        </div>
        <div className="cardla">
          <img
            className="img"
            src="https://cdn.Legend.de/userdata/images/Einkaufswelten/Kinder/Legend_2023_Bildzuschnitte_Homepage_900x674px_Sporthosen%20Kinder.jpg"
            alt=""
          />
          <li>
            <Link className="aw" to="/">
              Men sportswear
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Mens;
