import React from "react";
import "./Loading.css";
import LegendImage from "../NavbarTop/Legend.png"

function Loading() {
    return (
        <div className="w-full pt-[15pc] bg-blue-700 h-screen bg-opacity-10 ">
            <img className="w-[300px] mx-auto" src={LegendImage} alt="" />
            <h1 className="text-center text-3xl mt-5 font-semibold">Ishonchli Tanlov!!!</h1>
            <div className="loader mt-6 mb-6" />
        </div>
    );
}

export default Loading;
