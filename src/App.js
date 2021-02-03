import '../src/stylesheets/common.scss'
import '../src/stylesheets/playlist.scss'
import '../src/stylesheets/viewscreen.scss'
import '../src/stylesheets/grid.scss'
import '../src/stylesheets/bot.scss'
import '../src/stylesheets/controlpanel.scss'
import '../src/stylesheets/theme.scss'
import Jukebox from './components/playlist/jukebox'
import Adder from './components/playlist/adder'
import Art from './components/art/art'
import Floaters from './components/art/floaters'
import Links from './components/links/links'
import Pomodoro from './components/pomodoro/pomodoro'
import Tasker from './components/task/tasker'
import Bot from './components/bot/bot';
import Clock from './components/clock/clock'
import ColorControls from './components/controlpanel/colorcontrols'
import Mori from './components/memento/mori'
import Age from './components/memento/age'
import AutoScheduler from './components/autoscheduler/scheduler'
import React, { useState } from "react";

const colorPref = () => {
  if (JSON.parse(localStorage.getItem('colorpref')) === null) {
    return ("white")
  } else {
    return (JSON.parse(localStorage.getItem('colorpref')))
  }
};

export default function App() {
  //sets color default to white if nothing is found in local storage
  const [color, setColor] = useState(colorPref);
  //allows colors to be passed in to change class
  const classes = `container theme-${color}`;
  //allows color to persist after refresh/shutdown
  localStorage.setItem('colorpref', JSON.stringify(color))

  function handleChange(newColor) {
    setColor(newColor)
  };

  return (
    <>
      <div className={classes}>
        <Jukebox />

        
     
        <div className="three borders threeContainer">
          <div className="borders threeOne">3.1</div>
          <div className="borders threeTwo">3.2</div>
          <div className="borders threeThree">3.3</div>
          <div className="borders threeFour">3.4</div>
         </div>
        <div className="four borders">4</div>
        <div className="five borders">5</div>
        <div className="six borders">6</div>
        <div className="seven borders">7</div>
        <div className="eight borders">8</div>
        <div className="nine borders">9</div>
        {/* <Jukebox />
        <Clock />
        <Links />
        <ColorControls color={color} onChange={handleChange}/> */}
        {/* <div className="eleven borders hov">
          <Adder />
        </div> */}
        {/* <Pomodoro /> */}
        {/* <Tasker /> */}
        {/* <div className="five toprow borders hov"> */}
          {/* <Mori /> <Age /> */}
          {/* <AutoScheduler />
        </div>
        <Bot />
        <div className="seven borders hov"><Art/></div>
        <Floaters /> */}
      </div>
    </>
  );
}
 





 




  

    
    
  
        
            
      




         
         
          
           
     
        

        









  
  

 




