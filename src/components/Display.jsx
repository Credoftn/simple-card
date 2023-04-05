import React from "react";
import "./Display.css";
// import img2 from "./img2.jfif";

const Display = (props) => {
  return (
    <div className="Display">            
      <div className="Display-content">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>      
    </div>
  );
};

export default Display;
