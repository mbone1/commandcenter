import { fill, push } from "core-js/fn/array";
import React, { Component } from "react";
import Sketch from "react-p5";

let diam = 0
let change = 2.2
export default class Art extends Component {
  x = 200;
  y = 160;
  cirNum = 10;
  
  setup = (p5, parent) => {
    p5.createCanvas(400, 390).parent(parent);
  };
  draw = (p5) => {

      diam += change;
      if (diam > p5.width) {
        change = -change;
      } else if (diam < 0) {
        change = -change;
    }
    
    p5.background('black');
    // p5.noCursor();
    // p5.noStroke();
    // p5.fill('white');
    // p5.circle(p5.mouseX, p5.mouseY, 5);
    
    p5.noFill();
    //main graph
    p5.stroke('orange')
    p5.strokeWeight(1);
    p5.circle(p5.width/2, p5.height/2, (diam-30))
    p5.circle(p5.width/2, p5.height/2, (diam-35))
    p5.circle(p5.width/2, p5.height/2, (diam-40))
    p5.stroke('red')
    p5.circle(p5.width/2, p5.height/2, (diam-45))
    p5.circle(p5.width/2, p5.height/2, (diam-50))
    p5.circle(p5.width/2, p5.height/2, (diam-60))
    p5.circle(p5.width/2, p5.height/2, 70)
    p5.circle(p5.width/2, p5.height/2, 90)
    p5.stroke('white')
    p5.circle(p5.width/2, p5.height/2, 110)
    p5.circle(p5.width / 2, p5.height / 2, 130)
    p5.stroke('turquoise')
    p5.circle(p5.width/2, p5.height/2, 140)
    p5.circle(p5.width/2, p5.height/2, 160)
    p5.circle(p5.width/2, p5.height/2, 165)
    p5.stroke('pink')
    p5.circle(p5.width/2, p5.height/2, 175)
    p5.circle(p5.width/2, p5.height/2, 180)
    p5.circle(p5.width/2, p5.height/2, 200)
    p5.circle(p5.width / 2, p5.height / 2, 215)
    p5.stroke('white')
    p5.circle(p5.width/2, p5.height/2, 10, diam)
    // p5.square(p5.width/2, p5.height/2, diam)
    p5.ellipse(p5.width / 2, p5.height / 2, diam)
    // p5.torus(50)
    
    
  };

  

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
