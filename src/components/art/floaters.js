import React, { Component, useState } from "react";
import Sketch from "react-p5";

export default class Floaters extends Component {
    setup = (p5, parent, degrees) => {
        p5.createCanvas(1623, 259).parent(parent);
        p5.background('black')
      
    };
    draw = (p5) => {
      
    }
    
    
    render() {
        return (
          <div className="twelve borders hov">
          
            <Sketch setup={this.setup} draw={this.draw} />
          </div>
        );

    }
}
