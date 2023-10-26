import React from "react";
import { AiFillStar } from "react-icons/ai";
import {
  BsFacebook,
  BsInstagram,
  BsStarHalf,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer_Image from "../../img/Footer_Images.jpg";
import Just_Photo from "../../img/photo_2023-10-09_14-55-13.jpg";
import "./Footer.css";

function Footer() {
  return (
    <div className="">
      <section className="HrOne">
        <hr className="s" />
        <div className="Just_One">
          <div className="JustFlex">
            <img src={Footer_Image} alt="" />
            <img src={Just_Photo} alt="" />
          </div>
          <div className="JustFlex1">
            <div className="icon">
              <AiFillStar className="ai" />
              <AiFillStar className="ai" />
              <AiFillStar className="ai" />
              <AiFillStar className="ai" />
              <BsStarHalf className="bs" />
              <p className="p"> (4,52/5) Trusted Shop</p>
            </div>
          </div>
        </div>
        <hr className="s" />
      </section>
      <div className="Js">
        <div className="section">
          <div className="one">
            <h1 className="h1">ABOUT JAKO</h1>
            <div className="link">
              <Link className="" to="/">
                {" "}
                Company
              </Link>
            </div>
            <div className="link">
              <Link className="" to="/">
                Career{" "}
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
              <Link className="" to="/">
                Newsblog
              </Link>
            </div>
            <div className="link">
              <Link className="" to="/">
                Media
              </Link>
            </div>
          </div>
          <div className="one">
            <h1 className="h1">ABOUT JAKO</h1>
            <div className="link">
              <Link className="" to="/">
                {" "}
                Company
              </Link>
            </div>
            <div className="link">
              <Link className="" to="/">
                Career{" "}
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
              <Link className="" to="/">
                Newsblog
              </Link>
            </div>
            <div className="link">
              <Link className="" to="/">
                Media
              </Link>
            </div>
          </div>
          <div className="one">
            <h1 className="h1">ABOUT JAKO</h1>
            <div className="link">
              <Link className="" to="/">
                Company
              </Link>
            </div>
            <div className="link">
              <Link className="" to="/">
                Career
              </Link>
            </div>
            <div className="link">
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
              <Link className="" to="/">
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
          <h1>SAVE 30% ON YOUR FIRST ORDER</h1>
          <br />
          <h4>
            Excluded for fan articles, organic and doubletex articles and
            already reduced articles
          </h4>
          <br />
          <button className="now">BECOME A CLUB MEMBER NOW</button>
        </div>
      </div>
      <hr className="s" />
      <div className="Quit">
        <div className="exit_one">
          <h1>WE ARE TEAM</h1>
          <BsFacebook className="i" />
          <BsInstagram className="i" />
          <BsYoutube className="i" />
          <BsTwitter className="i" />
        </div>
        <div className="exit_two">
          <ul>
            <li>
              <Link to="/">Protection des données</Link>
            </li>
            <li>
              <Link to="/">Système d'Alerte Professionnelle</Link>
            </li>
            <li>
              <Link to="/">Droit de rétractation</Link>
            </li>
            <li>
              <Link to="/">Conditions générales</Link>
            </li>
            <li>
              <Link to="/">Mentions légales</Link>
            </li>
            <li>
              <p className="link">© 2023 JAKO AG, Tous droits réservés</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
{
}
export default Footer;
