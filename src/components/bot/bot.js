import Fela from '../../media/fela.jpg'
import Skull from '../../media/placeholder1.jpg'

import React, { useState } from "react";

export default function Bot() {
    const [source, setSource] = useState(Skull);



    return (
      <div className="six borders hov">
        <button
          className="sideBtn ichi borders invert"
          onClick={() => setSource(Fela)}>
          KBT
        </button>
        <button className="sideBtn borders ni invert">HBT</button>
        <button className="sideBtn borders san invert" onClick={() => setSource(Skull)}>
          SBT
        </button>
        <button className="sideBtn borders shi invert">DBT</button>
        <div className="namePlate borders">Fela KuBOT</div>
        {/* placeholder currently, will change to be name of whichever bot is displayed */}
        <img className="kubot borders" src={source} alt="Fela Kuti" height="350px" />
        <div className="textBox borders">
          <p className="text">
            Waste no more time arguing about what a good man should be. Be one.
            <br></br>
            <div className="author borders"> Marcus Aurelius ― Meditations</div>
          </p>
        </div>
      </div>
    );
        
}
