import { fill, push } from "core-js/fn/array";
import React, { Component, useState } from "react";
import Sketch from "react-p5";

let diam = 100
let change = 2.2
let diamState = true;


// export default (props) => {
//   const [clicked, isClicked] = useState()
  
//   const setup = (p5, canvasParentRef) => {
//     p5.createCanvas(500, 500).parent(canvasParentRef);
//   }

//   const draw = (p5) => {
//     p5.background('black')
//   }
// }



export default class Art extends Component {
  // const[diamState, setDiamState] = useState();
  x = 210;
  y = 160;
  cirNum = 10;
  
  
  setup = (p5, parent) => {
    p5.createCanvas(400, 390).parent(parent);
  };
  draw = (p5) => {

    if (diamState === true) {
      diam += change;
      if (diam > p5.width * 1.5) {
        change = -change;
      } else if (diam < 70) {
        change = -change;
      }
    }
    else if (diamState === false)
    {
      let diam = 0
      let change = 0
    }

    

  p5.background('black');

    
    // p5.noCursor();
    // p5.noStroke();
    // p5.fill('white');
    // p5.circle(p5.mouseX, p5.mouseY, 5);
    
    p5.noFill();
    //main graph
    p5.strokeWeight(1);
    p5.stroke('red')
    p5.circle(p5.width/2, p5.height/2, (`${diamState.isPressed}1`))
    p5.circle(p5.width/2, p5.height/2, (diam-2))
    // p5.stroke('red')
    // p5.circle(p5.width/2, p5.height/2, (diam-8))
    p5.circle(p5.width/2, p5.height/2, (diam-9))
    // p5.stroke('white')
    p5.circle(p5.width/2, p5.height/2, (diam-10))
    // p5.circle(p5.width/2, p5.height/2, (diam-12))
    p5.circle(p5.width/2, p5.height/2, (diam-13))
    // p5.stroke('turquoise')
    p5.circle(p5.width/2, p5.height/2, (diam-17))
    p5.circle(p5.width/2, p5.height/2, (diam-18))
    // p5.circle(p5.width/2, p5.height/2, (diam-22))
    p5.circle(p5.width/2, p5.height/2, (diam-23))
    // p5.stroke('red')
    p5.circle(p5.width/2, p5.height/2, (diam-28))
    // p5.circle(p5.width/2, p5.height/2, (diam-29))
    // p5.circle(p5.width/2, p5.height/2, (diam-30))
    p5.circle(p5.width/2, p5.height/2, (diam-31))
    p5.stroke('orange')
    p5.circle(p5.width/2, p5.height/2, (diam-34))
    // p5.circle(p5.width/2, p5.height/2, (diam-35))
    p5.circle(p5.width/2, p5.height/2, (diam-36))
    // p5.stroke('orange')
    // p5.circle(p5.width/2, p5.height/2, (diam-37))
    p5.circle(p5.width/2, p5.height/2, (diam-38))
    // p5.circle(p5.width/2, p5.height/2, (diam-39))
    p5.circle(p5.width/2, p5.height/2, (diam-40))
    // p5.stroke('red')
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
    p5.stroke('white')
    // console.log(diamState)
    p5.circle(p5.width/2, p5.height/2, (diam - 70))
    p5.stroke('red')
    p5.circle(p5.width/2, p5.height/2, (30))
    // p5.circle(p5.width/2, p5.height/2, (diam - 70))
    p5.strokeWeight(3);
    p5.stroke('red')
    p5.circle(p5.width/2, p5.height/2, (60))
    p5.stroke('white')
    p5.circle(p5.width/2, p5.height/2, (50))
    // p5.circle(p5.width / 2, p5.height / 2, diam - 110);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 130);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 140);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 160);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 165);
    // p5.stroke('pink')
    // p5.circle(p5.width / 2, p5.height / 2, diam - 175);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 180);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 200);
    // p5.circle(p5.width / 2, p5.height / 2, diam - 215);
    // p5.stroke('white')
    // p5.circle(p5.width/2, p5.height/2, 10, diam - 220)
    // // p5.square(p5.width/10, p5.height/20, diam)
    // p5.ellipse(p5.width / 2, p5.height / 2, diam - 250)
    // p5.torus(50)
    
    
  };

  

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
