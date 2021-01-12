import { fill, push } from "core-js/fn/array";
import React, { Component, useState } from "react";
import Sketch from "react-p5";

let diam = 100
let change = 2.2
let breathe = false;
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
  

  setup = (p5, parent) => {
    p5.createCanvas(400, 390).parent(parent);
  };
  draw = (p5) => {
    if (this.state.breathing === true) {
      diam += change;
      if (diam > p5.width * 1.5) {
        change = -change;
      } else if (diam < 70) {
        change = -change;
      }
    }
    p5.background('black');
    p5.noFill();
    //main graph
    p5.strokeWeight(1);
    p5.stroke('pink')
    p5.circle(p5.width/2, p5.height/2, (diam-2))
    p5.circle(p5.width/2, p5.height/2, (diam-9))
    p5.circle(p5.width/2, p5.height/2, (diam-10))
    p5.circle(p5.width/2, p5.height/2, (diam-13))
    p5.circle(p5.width/2, p5.height/2, (diam-17))
    p5.circle(p5.width/2, p5.height/2, (diam-18))
    p5.circle(p5.width/2, p5.height/2, (diam-23))
    p5.circle(p5.width/2, p5.height/2, (diam-28))
    p5.circle(p5.width/2, p5.height/2, (diam-31))
    p5.stroke('turquoise')
    p5.circle(p5.width/2, p5.height/2, (diam-34))
    p5.circle(p5.width/2, p5.height/2, (diam-36))
    p5.circle(p5.width/2, p5.height/2, (diam-38))
    p5.circle(p5.width/2, p5.height/2, (diam-40))
    p5.circle(p5.width/2, p5.height/2, (diam-45))
    p5.circle(p5.width/2, p5.height/2, (diam-46))
    p5.circle(p5.width/2, p5.height/2, (diam-47))
    p5.circle(p5.width/2, p5.height/2, (diam-49))
    p5.circle(p5.width/2, p5.height/2, (diam-70))
    p5.circle(p5.width/2, p5.height/2, (diam-60))
    p5.circle(p5.width/2, p5.height/2, (diam-45))
    p5.circle(p5.width/2, p5.height/2, (diam-50))
    p5.circle(p5.width/2, p5.height/2, (diam-60))
    p5.circle(p5.width/2, p5.height/2, diam - 70)
    p5.circle(p5.width/2, p5.height/2, diam - 90)
    p5.strokeWeight(6);
    p5.stroke('purple')
    p5.circle(p5.width/2, p5.height/2, (diam - 70))
    p5.stroke('red')
    p5.circle(p5.width/2, p5.height/2, (30))
    p5.strokeWeight(3);
    p5.stroke('red')
    p5.circle(p5.width/2, p5.height/2, (60))
    p5.stroke('white')
    p5.circle(p5.width/2, p5.height/2, (50))
  };
  render() {
    return <>
      <Sketch setup={this.setup} draw={this.draw} />
      <button onClick={this.handleClick}>{this.state.breathing ? 'breathe' : 'hold'}</button>
    </>

  }
}
 
    
  

 
    


    
    
  

  
  
 

  
   
    
    

  

