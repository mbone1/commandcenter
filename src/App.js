import '../src/stylesheets/common.scss'
import '../src/stylesheets/playlist.scss'
import '../src/stylesheets/viewscreen.scss'
import '../src/stylesheets/grid.scss'
import '../src/stylesheets/bot.scss'
import React from 'react';
import Jukebox from './components/playlist/jukebox'
import Links from './components/links/links'
import Pomodoro from './components/pomodoro/pomodoro'
import Tasker from './components/task/tasker'
import Bot from './components/bot/bot';


export default function App() {
  return (
    <>
      {" "}
      <div class="container">
        <Jukebox />
        <Pomodoro />
        <Tasker />
        <div className="five notes borders hov">five - NOT SURE</div>
        <Bot />
        <div className="seven borders hov">seven - ART PANEL</div>
        <div className="eight borders hov">eight - CLOCK</div>
        <Links />
        <div className="ten borders hov">ten - CONTROL PANEL</div>
        <div className="eleven borders hov">eleven - CONTROL PANEL</div>
        <div className="twelve borders hov">twelve - NOT SURE</div>
      </div>
    </>
  );
}


  

    
    
  
        
            
       
     
      
       

  
  
  {/* <img class="border" src={Fela} width="300" height="500"></img> */}
  {/* <iframe
    src="https://www.google.com/webhp?igu=1"
    width="840"
    height="472.5"></iframe> */}




         
         
          
           
     
        

        









  
  

 




