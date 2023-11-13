import React from "react";
import JakoOnline from "./jakoonline/JakoOnline";
import JoinDAnPAsti from "./joindanPasti/JoinDAnPAsti";
import Partners from "../Partners/Partners";

function Jakos() {
  return (
    <div className="container">
      <JoinDAnPAsti />
      <Partners/>
      <JakoOnline />
    </div>
  );
}

export default Jakos;
