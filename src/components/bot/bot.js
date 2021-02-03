import Fela from '../../media/fela.jpg'
import Skull from '../../media/placeholder1.jpg'

import React, { useState } from "react";

export default function Bot() {
    const [source, setSource] = useState(Skull);
    return (
      <div className="six borders hov sixContainer">
      
        <div className="sixOne">
          <img className="kubot" src={source} alt="bot"/>
        </div>
        <div className="sixTwo borders">6.2</div>
        <div className="sixThree borders">6.3</div>
       
      </div>
    );
  }



        