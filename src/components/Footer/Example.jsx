import React, { useState } from "react";

function Example() {
  const [isochil, setisOchil] = useState(false);
  return (
    <div>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e)=>setisOchil(!isochil)}>
          Tanla
          <span className="fas fa-caret-down"></span>
        </div>
        {isochil && (
          <div className="dropdown-content">
            <div className="dropdown-item">Achela</div>
            <div className="dropdown-item">Opodela</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Example;
