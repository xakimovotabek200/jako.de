import React from "react";
import JakoOnline from "./jakoonline/JakoOnline";
import JoinDAnPAsti from "./joindanPasti/JoinDAnPAsti";

function Jakos() {
  return (
    <div className="container">
      <JoinDAnPAsti />
      <JakoOnline />
    </div>
  );
}

export default Jakos;
