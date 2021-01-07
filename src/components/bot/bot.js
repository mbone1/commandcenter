import Fela from '../../media/fela.jpg'
import Skull from '../../media/placeholder1.jpg'

import React, { useState } from "react";

export default function Bot() {
    const [source, setSource] = useState(Skull);



    return (
      <div className="six borders hov botContainer">
        <div className="botContainerOne">
          {" "}
          <button
            className="sideBtn borders ichi invert"
            onClick={() => setSource(Fela)}>
            FBT
          </button>
          <button
            className="sideBtn borders ni invert"
            onClick={() => setSource(Skull)}>
            SBT
          </button>
          <div className="namePlate borders">SkullBot</div>
        </div>
        <img className="kubot borders" src={source} alt="bot" />
        <div className="botContainerTwo">
          <p className="borders textBox">
            Waste no more time arguing about what a good man should be. Be one.
            <br></br>
            <div className="borders author"> Marcus Aurelius ― Meditations</div>
          </p>
        </div>
      </div>
    );
        
}

        // <button
        //   className="sideBtn ichi borders invert"
        //   onClick={() => setSource(Fela)}>
        //   KBT
        // </button>
        // <div className="{source}"></div>
        // <button className="sideBtn borders san invert" onClick={() => setSource(Skull)}>
        //   SBT
        // </button>
        // <button className="sideBtn borders shi invert">DBT</button>
        // {/* placeholder currently, will change to be name of whichever bot is displayed */}
        // <img className="kubot borders" src={source} alt="Fela Kuti" height="350px" />
        // <div className="textBox borders">
        // </div>