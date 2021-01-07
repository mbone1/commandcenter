import React, { Component } from "react";
import Sketch from "react-p5";

export default class Art extends Component {
  x = 200;
  y = 160;

  setup = (p5, parent) => {
    p5.createCanvas(400, 390).parent(parent);
  };
  draw = (p5) => {
    p5.background(29);
    p5.ellipse(this.x, this.y, 150, 150);
    // this.x++;
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
