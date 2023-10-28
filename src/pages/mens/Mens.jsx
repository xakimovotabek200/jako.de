import React from "react";
import Men1 from "../../img/men1.jpg";
import Men2 from "../../img/men2.jpg";
import Men3 from "../../img/men3.jpg";
import "./Men.css";
import Our from "./Our";
import { Link } from "react-router-dom";
function Mens() {
  return (
    <div>
      <h1 className="men">MEN</h1>
      <div className="Men">
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
      <Our />
      <div className="card">
        <div className="cardla">
          <img
            className="img"
            src="https://cdn.Legend.de/userdata/images/Einkaufswelten/Herren/Legend_2023_Bildzuschnitte_Homepage_900x674px_Herren%20T-Shirts.jpg"
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
            src="https://cdn.Legend.de/userdata/images/Einkaufswelten/Herren/Legend_2023_Bildzuschnitte_Homepage_900x674px_Herren%20Trainingsjacken.jpg"
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
            src="https://cdn.Legend.de/userdata/images/Einkaufswelten/Herren/Legend_2023_Bildzuschnitte_Homepage_900x674px_Herren%20Sporthosen.jpg"
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
