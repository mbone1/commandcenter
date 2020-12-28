import Fela from '../../media/fela.jpg'

import React, { useState } from "react";

export default function Bot() {
    const [source, setSource] = useState(Fela);



    return (
      <div className="six borders hov">
        <button className="sideBtn ichi invert">KBT</button>
        <button className="sideBtn ni invert">HBT</button>
        <button className="sideBtn san invert">SBT</button>
        <button className="sideBtn shi invert">DBT</button>
        <div className="namePlate">Fela KuBOT</div>
        {/* placeholder currently, will change to be name of whichever bot is displayed */}
        <img className="kubot" src={source} alt="Fela Kuti" height="350px" />
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
