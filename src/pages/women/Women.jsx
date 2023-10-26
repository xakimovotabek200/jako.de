import React from "react";
import { Link } from "react-router-dom";
import HightLights from "../../components/Higtlights/HightLights";
import Men1 from "./JAKOwomen1.jpg";
import Men2 from "./JAKOwomen2.jpg";
import Men3 from "./JAKOwomen3.jpg";
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
            src="https://cdn.jako.de/userdata/images/Einkaufswelten/Damen/JAKO_2023_Bildzuschnitte_Homepage_900x674px_Damen%20Trainingsjacken.jpg"
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
            src="https://cdn.jako.de/userdata/images/Einkaufswelten/Damen/JAKO_2023_Bildzuschnitte_Homepage_900x674px_Damen%20T-Shirts.jpg"
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
            src="https://cdn.jako.de/userdata/images/Einkaufswelten/Damen/JAKO_2023_Bildzuschnitte_Homepage_900x674px_Damen%20Sporthosen.jpg"
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
