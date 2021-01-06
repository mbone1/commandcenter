import '../src/stylesheets/common.scss'
import '../src/stylesheets/playlist.scss'
import '../src/stylesheets/viewscreen.scss'
import '../src/stylesheets/grid.scss'
import '../src/stylesheets/bot.scss'
import '../src/stylesheets/controlpanel.scss'
import '../src/stylesheets/theme.scss'
import React from 'react';
import Jukebox from './components/playlist/jukebox'
import Links from './components/links/links'
import Pomodoro from './components/pomodoro/pomodoro'
import Tasker from './components/task/tasker'
import Bot from './components/bot/bot';
import Clock from './components/clock/clock'
import ColorControls from './components/controlpanel/colorcontrols'
import Mori from './components/memento/mori'
import Age from './components/memento/age'



export default function App() {
  return (
    <>
      {" "}
      <div class="container theme-yellow">
        <Jukebox />
        <Pomodoro />
        <Tasker />
        <div className="five toprow borders hov">
          <Mori /> <Age />
        </div>
        <Bot />
        <div className="seven borders hov">seven - ART PANEL</div>
        <Clock />
        <Links />
        <ColorControls />
        <div className="eleven borders hov">
          eleven - CONTROL PANEL - USED TO ADD TO PLAYLIST?
        </div>
        <div className="twelve borders hov">twelve - NOT SURE</div>
      </div>
    </>
  );
}


  

    
    
  
        
            
      




         
         
          
           
     
        

        









  
  

 




