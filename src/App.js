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
        <Clock />
        <ColorControls color={color} onChange={handleChange}/>
        <Links />
        <Adder />
         </div>
        <Pomodoro />
        <AutoScheduler />
        <Bot />  
        <Art />
        <Tasker />

        
     
       
        <div className="nine borders">9</div>
      
       
      </div>
    </>
  );
}
 





 




  

    
    
  
        
            
      




         
         
          
           
     
        

        









  
  

 




