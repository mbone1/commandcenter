import React, { useState } from "react";



export default function ColorControls(props) {
   
  function handleChange(event) {
    props.onChange(event.target.value)
  }
    return (
      <div className="threeTwo borders hov holder">
        <button
          className="cButton white"
          name="color"
          value="white"
          onClick={handleChange}></button>
        <button
          className="cButton yellow"
          name="color"
          value="yellow"
          onClick={handleChange}></button>
        <button
          className="cButton orange"
          name="color"
          value="orange"
          onClick={handleChange}></button>
        <button
          className="cButton red"
          name="color"
          value="red"
          onClick={handleChange}></button>
        <button
          className="cButton pink"
          name="color"
          value="pink"
          onClick={handleChange}></button>
        <button
          className="cButton purple"
          name="color"
          value="purple"
          onClick={handleChange}></button>
        <button
          className="cButton blue"
          name="color"
          value="blue"
          onClick={handleChange}></button>
        <button
          className="cButton turquoise"
          name="color"
          value="turquine"
          onClick={handleChange}></button>
        <button
          className="cButton green"
          name="color"
          value="green"
          onClick={handleChange}></button>
        <button
          className="cButton lightblue"
          name="color"
          value="rainbow"
          onClick={handleChange}></button>
        
      </div>
);
}



    
