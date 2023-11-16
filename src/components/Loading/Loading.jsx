import React from "react";
import "./Loading.css";
import LegendImage from "../NavbarTop/Legend.png"

function Loading() {
    return (
        <div className="">
            <img className="w-[300px] mx-auto" src={LegendImage} alt="" />
            <div className="loader mt-6 mb-6" />
        </div>
    );
}

export default Loading;
