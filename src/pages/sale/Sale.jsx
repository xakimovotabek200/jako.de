import React from "react";
import "./Sale.css";
import { Link } from "react-router-dom";

function Sale() {
  return (
    <div className="me">
      <div className="card">
        <div className="cards">
          <li>
            <Link className="aws" to="/">
              Men
            </Link>
          </li>
        </div>
        <div className="cards1">
          <li>
            <Link className="aws" to="/">
              Woomen
            </Link>
          </li>
        </div>
        <div className="cards2">
          <li>
            <Link className="aws" to="/">
              Kids
            </Link>
          </li>
        </div>

        <div className="cards4">
          <li>
            <Link className="aws" to="/">
              Equipment
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Sale;
