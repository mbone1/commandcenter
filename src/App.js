import '../src/stylesheets/common.scss'
import '../src/stylesheets/playlist.scss'
import '../src/stylesheets/viewscreen.scss'
import '../src/stylesheets/grid.scss'
import '../src/stylesheets/bot.scss'
import '../src/stylesheets/controlpanel.scss'
import '../src/stylesheets/theme.scss'
import Jukebox from './components/playlist/jukebox'
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
import Adder from './components/playlist/adder'
import React, { useState } from "react";


 



export default function App() {
  
  const [color, setColor] = useState("white");
  const classes = `container theme-${color}`

  return (
    <>
      {" "}
      <div class={classes}>
        <Jukebox />
        <Pomodoro />
        <Tasker />
        <div className="five toprow borders hov">
          <Mori /> <Age />
        </div>
        <Bot />
        <div className="seven borders hov"><Art/></div>
        <Clock />
        <Links />
        {/* <ColorControls /> */}
        <div className="ten borders hov holder">
          <button
            className="cButton white"
            onClick={() => setColor("white")}></button>
            <button
              className="cButton yellow"
              onClick={() => setColor("yellow")}></button>
          <button
            className="cButton orange"
            onClick={() => setColor("orange")}></button>
          <button
            className="cButton red"
            onClick={() => setColor("red")}></button>
          <button
            className="cButton pink"
            onClick={() => setColor("pink")}></button>
          <button
            className="cButton purple"
            onClick={() => setColor("purple")}></button>
          <button
            className="cButton blue"
            onClick={() => setColor("blue")}></button>
          <button
            className="cButton turquoise"
            onClick={() => setColor("turquine")}></button>
          <button
            className="cButton green"
            onClick={() => setColor("green")}></button>
          <button
            className="cButton lightblue"
            onClick={() => setColor("green")}></button>
        </div>

        <div className="eleven borders hov">
          <Adder />
        </div>
        <Floaters />
      </div>
    </>
  );
}


  

    
    
  
        
            
      




         
         
          
           
     
        

        









  
  

 




