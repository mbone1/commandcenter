import React, { Component, useState } from "react";
import Sketch from "react-p5";
import '../../stylesheets/breathe.scss'


let r;
let g;
let b;
let a;
let r2;
let g2;
let b2;
let a2;
let angle;
let diam = 100
let change = 2.2
export default class Art extends Component {
  constructor(props) {
    super(props);
    this.state = { breathing: false }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(state => ({
      breathing: !state.breathing
    }));
  }

  
  

  setup = (p5, parent, degrees) => {
    p5.createCanvas(400, 390).parent(parent);
    p5.angleMode(degrees)
  };
  draw = (p5) => {
    p5.background('black');
    if (this.state.breathing === true) {
      diam += change;
      if (diam > p5.width * 1.5) {
        change = -change;
      } else if (diam < 70) {
        change = -change;
      }
    }

    r = p5.random(255); // r is a random number between 0 - 255
    g = p5.random(100, 200); // g is a random number betwen 100 - 200
    b = p5.random(100); // b is a random number between 0 - 100
    a = p5.random(200, 255); // a is a random number between 200 - 255
    r2 = p5.random(255); // r is a random number between 0 - 255
    g2 = p5.random(100, 200); // g is a random number betwen 100 - 200
    b2 = p5.random(100); // b is a random number between 0 - 100
    a2 = p5.random(200, 255); // a is a random number between 200 - 255

    p5.noFill();
    //main graph
    p5.push()
    p5.rotate(angle)
    p5.translate(p5.width / 2, p5.height / 2);
    for (let i = 0; i < 90; i+=10) {
    p5.strokeWeight(1);
    p5.stroke("white");
    p5.circle(0, 0, diam - (i+5))
    }
    p5.pop()
   
    for (let i = 0; i < 90; i+=20) {
    p5.strokeWeight(2);
    p5.stroke("pink");
    p5.circle(p5.width/2, p5.height/2, diam - (i+1))
  }
    
    // p5.stroke(r, g, b, a);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 2);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 9);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 10);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 13);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 17);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 18);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 23);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 28);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 31);
    // p5.stroke(r2, g2, b2, a2);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 34);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 36);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 38);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 40);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 45);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 46);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 47);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 49);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 70);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 60);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 45);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 50);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 60);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 70);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 90);
    // p5.strokeWeight(6);
    //    p5.stroke(r, g, b, a);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 70);
    //    p5.stroke(r, g, b, a);
    // p5.circle(p5.width / 2, p5.height / 2, 30);
    // p5.strokeWeight(3);
    //    p5.stroke(r2, g2, b2, a2);
    // p5.circle(p5.width / 2, p5.height / 2, 60);
    // p5.stroke(r, g, b, a);
    // p5.circle(p5.width / 2, p5.height / 2, 50);
  };
  render() {
    return (
      <div className="seven borders">
        <div className="breatheContainer">
          <div className="breatheContainerOne">
            <Sketch setup={this.setup} draw={this.draw} />
            <button
              className="breatheBtn borders invert breatheText"
              onClick={this.handleClick}>
              <span className="breatheText">breathe</span>
            </button>
          </div>
        </div>
      </div>
    );

  }
}
 
    
  

 
    


    
    
  

  
  
 

  
   
    
    

  

