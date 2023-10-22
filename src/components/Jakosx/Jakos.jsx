import React from "react";
import JoinDAnPAsti from "./joindanPasti/JoinDAnPAsti";
import JakoOnline from "./jakoonline/JakoOnline";
import Example from "../Footer/Example";

function Jakos() {
  return (
    <div className="container">
      <JoinDAnPAsti />
      <JakoOnline />
      <Example/>
    </div>
  );
}

export default Jakos;
