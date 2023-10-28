import React from "react";
import { Link } from "react-router-dom";
import HightLights from "../../components/Higtlights/HightLights";
import Men1 from "./Legendwomen1.jpg";
import Men2 from "./Legendwomen2.jpg";
import Men3 from "./Legendwomen3.jpg";
import "./Women.css";

function Women() {
  return (
    <div>
      <div className="Men">
        <h1 className="men">Woomen</h1>
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
            src="https://cdn.Legend.de/userdata/images/Einkaufswelten/Damen/Legend_2023_Bildzuschnitte_Homepage_900x674px_Damen%20Trainingsjacken.jpg"
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
            src="https://cdn.Legend.de/userdata/images/Einkaufswelten/Damen/Legend_2023_Bildzuschnitte_Homepage_900x674px_Damen%20T-Shirts.jpg"
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
            src="https://cdn.Legend.de/userdata/images/Einkaufswelten/Damen/Legend_2023_Bildzuschnitte_Homepage_900x674px_Damen%20Sporthosen.jpg"
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

export default Women;
