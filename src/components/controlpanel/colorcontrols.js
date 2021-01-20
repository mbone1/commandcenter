import React, { useState } from "react";

const colorPref = () => {
  if (JSON.parse(localStorage.getItem("colorpref")) === null) {
    return "white";
  } else {
    return JSON.parse(localStorage.getItem("colorpref"));
  }
};

export default function ColorControls() {
   
    const [color, setColor] = useState(colorPref);
    //allows colors to be passed in to change class
    const classes = `container theme-${color}`;
    //allows color to persist after refresh/shutdown
    localStorage.setItem("colorpref", JSON.stringify(color));



    
    return (
      <div className="ten borders hov holder">
        <button
          className="cButton white"
          name="color"
          onClick={() => setColor("white")}></button>
        <button
          className="cButton yellow"
          onClick={() => setColor("yellow")}></button>
        <button
          className="cButton orange"
          onClick={() => setColor("orange")}></button>
        <button
          className="cButton red"
          onClick={() => setColor("red")}></button>
        <button
          className="cButton pink"
          onClick={() => setColor("pink")}></button>
        <button
          className="cButton purple"
          onClick={() => setColor("purple")}></button>
        <button
          className="cButton blue"
          onClick={() => setColor("blue")}></button>
        <button
          className="cButton turquoise"
          onClick={() => setColor("turquine")}></button>
        <button
          className="cButton green"
          onClick={() => setColor("green")}></button>
        <button
          className="cButton lightblue"
          onClick={() => setColor("rainbow")}></button>
      </div>
    );
}
