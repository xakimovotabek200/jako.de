import React from "react";
import "./NavbarTop.css";
import fan from "./fan.jpg";
import fan1 from "./fan4.jpg";
import fan2 from "./fan2.jpg";
import fan3 from "./fan3.jpg";
import { Link } from "react-router-dom";
const NavbarTop = () => {
  return (
      <div className="navbar-top">
        <div className="navbar-top-logo">
          <img
            className="logo-img"
            src="https://cdn.jako.de/userdata/images/Basics/logo-blue.svg"
            alt=""
          />
          <ul className="navbar-top-ul-collection">
            <li className="navbar-top-item">
              <a className="navbar-top-item-a" href="#">
                <details>
                  <summary>Men</summary>
                  <div className="dropdown">
                    <div className="dropdown_1">
                      <h4 className="dropdown-header">HIGHLIGHTS</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>New Hits</li>
                        <li>Bestseller</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">SPORTSWEAR</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>T-Shirts</li>
                        <li>Tights</li>
                        <li>Tops</li>
                        <li>Training jackets</li>
                        <li>Training trousers</li>
                        <li>Functional underwear</li>
                        <li>Jerseys</li>
                        <li>Sport shorts</li>
                        <li>Hoodies Sweatshirts</li>
                        <li>Polo shirts</li>
                        <li>Jackets</li>
                        <li>Training suits</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">BAsics</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>T-Shirts</li>
                        <li>Polo shirts</li>
                        <li>Hooded jackets</li>
                        <li>Hoodies & Sweatshirts</li>
                        <li>Shorts</li>
                        <li>Trousers</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">ACCESSOIRES</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>Stirrups</li>
                        <li>Socks</li>
                        <li>Gloves</li>
                        <li>Hats</li>
                        <li>Neckwarmer</li>
                        <li>Caps</li>
                        <li>Flip-flops</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">COLLECTION</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>Power</li>
                        <li>Pro Casual</li>
                        <li>Performance</li>
                        <li>Challenge</li>
                        <li>Champ 2.0</li>
                        <li>Base</li>
                        <li>Striker 2.0</li>
                        <li>Classico</li>
                        <li>Premium</li>
                      </ul>
                    </div>
                  </div>
                </details>
              </a>
            </li>
            <li className="navbar-top-item">
              <a className="navbar-top-item-a" href="#">
                <details>
                  <summary>Women</summary>
                  <div className="dropdown">
                    <div className="dropdown_1">
                      <h4 className="dropdown-header">HIGHLIGHTS</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>New Hits</li>
                        <li>Bestseller</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">SPORTSWEAR</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>T-Shirts</li>
                        <li>Tights</li>
                        <li>Tops</li>
                        <li>Training jackets</li>
                        <li>Training trousers</li>
                        <li>Functional underwear</li>
                        <li>Jerseys</li>
                        <li>Sport shorts</li>
                        <li>Hoodies Sweatshirts</li>
                        <li>Polo shirts</li>
                        <li>Jackets</li>
                        <li>Training suits</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">BAsics</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>T-Shirts</li>
                        <li>Polo shirts</li>
                        <li>Hooded jackets</li>
                        <li>Hoodies & Sweatshirts</li>
                        <li>Shorts</li>
                        <li>Trousers</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">ACCESSOIRES</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>Stirrups</li>
                        <li>Socks</li>
                        <li>Gloves</li>
                        <li>Hats</li>
                        <li>Neckwarmer</li>
                        <li>Caps</li>
                        <li>Flip-flops</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">COLLECTION</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>Power</li>
                        <li>Pro Casual</li>
                        <li>Performance</li>
                        <li>Challenge</li>
                        <li>Champ 2.0</li>
                        <li>Base</li>
                        <li>Striker 2.0</li>
                        <li>Classico</li>
                        <li>Premium</li>
                      </ul>
                    </div>
                  </div>
                </details>
              </a>
            </li>
            <li className="navbar-top-item">
              <a className="navbar-top-item-a" href="#">
                <details>
                  <summary> <Link to="/kids">Kids</Link></summary>
                  <div className="dropdown">
                    <div className="dropdown_1">
                      <h4 className="dropdown-header">HIGHLIGHTS</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>New Hits</li>
                        <li>Bestseller</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">SPORTSWEAR</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>T-Shirts</li>
                        <li>Training jackets</li>
                        <li>Functional underwear</li>
                        <li>Training suits</li>
                        <li>Training trousers</li>
                        <li>Jerseys</li>
                        <li>Sport shorts</li>
                        <li>Hoodies & Sweatshirts</li>
                        <li>Polo shirts</li>
                        <li>Jackets</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">BAsics</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>T-Shirts</li>
                        <li>Polo shirts</li>
                        <li>Hooded jackets</li>
                        <li>Hoodies & Sweatshirts</li>
                        <li>Shorts</li>
                        <li>Trousers</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">ACCESSOIRES</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>Stirrups</li>
                        <li>Socks</li>
                        <li>Gloves</li>
                        <li>Hats</li>
                        <li>Neckwarmer</li>
                        <li>Caps</li>
                        <li>Flip-flops</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">COLLECTION</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>Power</li>
                        <li>Performance</li>
                        <li>Challenge</li>
                        <li>Champ 2.0</li>
                        <li>Base</li>
                        <li>Striker 2.0</li>
                        <li>Classico</li>
                      </ul>
                    </div>
                  </div>
                </details>
              </a>
            </li>
            <li className="navbar-top-item">
              <a className="navbar-top-item-a" href="#">
                <details>
                  <summary>Equipment</summary>
                  <div className="dropdown">
                    <div className="dropdown_1">
                      <h4 className="dropdown-header">HIGHLIGHTS</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>New Hits</li>
                        <li>Bestseller</li>
                        <li>Product of the month</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">BAGS</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>Sport bag</li>
                        <li>Toilet bag</li>
                        <li>Team-kit bag</li>
                        <li>Backpacks</li>
                        <li>Gym bags</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">BALLS</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>Footballs</li>
                        <li>Futsal</li>
                        <li>Mini ball</li>
                        <li>Ball accessoires</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">FURTHER</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>Shin guards</li>
                        <li>Goalkeeper gloves</li>
                        <li>Sports shoes</li>
                        <li>Training equipment</li>
                      </ul>
                    </div>
                  </div>
                </details>
              </a>
            </li>
            <li className="navbar-top-item">
              <a className="navbar-top-item-a" href="#">
                <details>
                  <summary>Fan Shops</summary>
                  <div className="dropdown">
                    <div className="dropdown_1">
                      <div className="fanshop">
                        <img src={fan} alt="" />
                      </div>
                      <h4 className="dropdown-headers">HIGHLIGHTS</h4>
                      <hr className="dropdown-lines" />
                    </div>
                    <div className="dropdown_2">
                      <div className="fanshop">
                        <img src={fan1} alt="" />
                      </div>
                      <h4 className="dropdown-headers">BAGS</h4>
                      <hr className="dropdown-lines" />
                    </div>
                    <div className="dropdown_2">
                      <div className="fanshop">
                        <img src={fan2} alt="" />
                      </div>
                      
                      <h4 className="dropdown-headers">BALLS</h4>
                      <hr className="dropdown-lines" />
                    </div>
                    <div className="dropdown_2">
                      <div className="fanshop">
                        <img src={fan3} alt="" />
                      </div>
                      <h4 className="dropdown-headers">FURTHER</h4>
                      <hr className="dropdown-lines" />
                    </div>
                  </div>
                </details>
              </a>
            </li>
            <li className="navbar-top-item">
              <a className="navbar-top-item-a" href="#">
                <details>
                  <summary>Sale</summary>
                  <div className="dropdown">
                    <div className="dropdown_1">
                      <div className="fanshop">
                        <img src={fan} alt="" />
                      </div>
                      <h4 className="dropdown-headers">VFB Stuttgart</h4>
                      <hr className="dropdown-lines" />
                    </div>
                    <div className="dropdown_2">
                      <div className="fanshop">
                        <img src={fan1} alt="" />
                      </div>
                      <h4 className="dropdown-headers">Mainz 05</h4>
                      <hr className="dropdown-lines" />
                    </div>
                    <div className="dropdown_2">
                      <div className="fanshop">
                        <img src={fan2} alt="" />
                      </div>
                      <h4 className="dropdown-headers">Preußen Münster</h4>
                      <hr className="dropdown-lines" />
                    </div>
                    <div className="dropdown_2">
                      <div className="fanshop">
                        <img src={fan3} alt="" />
                      </div>
                      <h4 className="dropdown-headers">Rot-Weiss Essen</h4>
                      <hr className="dropdown-lines" />
                    </div>
                  </div>
                </details>
              </a>
            </li>
          </ul>
        </div>
        <div className="icons"></div>
      </div>
  );
};

export default NavbarTop;
