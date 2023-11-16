import React from "react";
import JakoOnline from "./jakoonline/JakoOnline";
import JoinDAnPAsti from "./joindanPasti/JoinDAnPAsti";

function Jakos() {
  return (
    <div className="container mx-auto">
      <JoinDAnPAsti />
      <JakoOnline />
    </div>
  );
}

export default Jakos;
