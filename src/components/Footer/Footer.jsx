import React from "react";
import Footer_Image from "../../img/Footer_Images.jpg";
import Just_Photo from "../../img/photo_2023-10-09_14-55-13.jpg";
import {
  BsStarHalf,
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsTwitter,
} from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import "./Footer.css";

function Footer() {
  return (
    <div className="conta">
      <section className="HrOne">
        <hr />
        <div className="Just_One">
          <div className="JustFlex">
            <img src={Footer_Image} alt="" />
            <img src={Just_Photo} alt="" />
          </div>
          <div className="JustFlex">
            <div className="icon">
              <AiFillStar className="ai" />
              <AiFillStar className="ai" />
              <AiFillStar className="ai" />
              <AiFillStar className="ai" />
              <BsStarHalf className="bs" />
              <p className="p"> (4,52/5) Trusted Shops</p>
            </div>
          </div>
        </div>
        <hr />
      </section>
      <div className="Js">
        <div className="section">
          <div className="one">
            <h1 className="">ABOUT JAKO</h1>
            <p>Company</p>
            <p>Career</p>
            <p>Sustainability</p>
            <p>Teams</p>
            <p>Newsblog</p>
            <p>Media</p>
          </div>
          <div className="one">
            <h1>JAKO COMMUNITY</h1>
            <p>JAKO for clubs</p>
            <p>JAKO for companies</p>
            <p>JAKO for retailers</p>
            <p>Find retailers</p>
            <p>Open a teamshop</p>
          </div>
          <div className="one">
            <h1>SERVICE</h1>
            <p>Customer information</p>
            <p>Material information</p>
            <p>Size chart</p>
            <p>Shipping</p>
            <p>Returns & complaints</p>
            <p>Catalogues & Downloads</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="left"></div>
        <div className="Mno">
          <h1>SAVE 30% ON YOUR FIRST ORDER</h1>
          <h4>
            Excluded for fan articles, organic and doubletex articles and
            already reduced articles
          </h4>
          <button className="now">BECOME A CLUB MEMBER NOW</button>
        </div>
      </div>
      <hr />
      <div className="hammasi">
        <div className="flexONe">
          <h1>WE ARE TEAM</h1>
          <div className="ico">
            <BsFacebook className="i" />
            <BsInstagram className="i" />
            <BsYoutube className="i" />
            <BsTwitter className="i" />
          </div>
          <div className="year">
            <ul>
              <li>
                <a href="/">Data protection</a>
              </li>
              <li>
                <a href="/">Whistleblower system</a>
              </li>
              <li>
                <a href="/">Instructions on cancellation</a>
              </li>
              <li>
                <a href="/">General terms & conditions</a>
              </li>
              <li>
                <a href="/">Legal notice</a>
              </li>
              <p>© 2023 JAKO AG, All rights reserved</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
