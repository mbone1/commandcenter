import '../src/stylesheets/common.scss'
import '../src/stylesheets/playlist.scss'
import '../src/stylesheets/viewscreen.scss'
import React, { useState } from 'react';
import Jukebox from './components/playlist/jukebox'
import Links from './components/links/links'
import Pomodoro from './components/pomodoro/pomodoro'
import Tasker from './components/task/tasker'
import Fela from './media/fela.jpg'


export default function App() {
  return (
    <>
      {" "}
      <div class="container">
        <Jukebox/>
        <Pomodoro />
        <Tasker />
        <div className="five notes borders hov">five</div>
        <div className="six borders ai hov">six</div>
        <div className="seven borders hov">seven</div>
        <div className="eight borders hov">eight</div>
        <Links/>
        <div className="ten borders hov">ten</div>
        <div className="eleven borders hov">eleven</div>
        <div className="twelve borders hov">twelve</div>
    
      </div>
    </>
  );
}


  

    
    
  
        
            
       
     
      
       

  
  
  {/* <img class="border" src={Fela} width="300" height="500"></img> */}
  {/* <iframe
    src="https://www.google.com/webhp?igu=1"
    width="840"
    height="472.5"></iframe> */}




         
         
          
           
     
        

        









  
  

 




