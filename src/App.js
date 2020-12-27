import '../src/stylesheets/common.scss'
import '../src/stylesheets/playlist.scss'
import '../src/stylesheets/viewscreen.scss'
import React, { useState } from 'react';
import playlists from './playlists.js';
// import Task from './components/task/task'
// import TaskForm from './components/task/taskform'
import Pomodoro from './components/pomodoro/pomodoro'
import Tasker from './components/task/tasker'
import Fela from './media/fela.jpg'


export default function App() {
//variable created to swap 'src' and change video displayed
  const [source, setSource] = useState("");
 

//maps over playlist file and appends buttons to page, manipulates source of 'iframe' component
  const listItems = playlists.map((playlist) => (
    <>
      <button
        class="playlist-button invert"
        key={playlist.Name}
        content={playlist.Name}
        onClick={() => setSource(playlist.SRC)}>
        {playlist.Name.toUpperCase()}
      </button>
      <br />
    </>
  ));

  return (
    <>
      {" "}
      <div class="container">
        <div class="playlist hov row1 one">{listItems}</div>
        <div className="viewscreenContainer two hov">
          <iframe
            class="viewscreen row1"
            title={source}
            src={source}
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <Pomodoro />
        <Tasker />
        <div className="five notes borders hov">five</div>
        <div className="six borders ai hov">six</div>
        <div className="seven borders hov">seven</div>
        <div className="eight borders hov">eight</div>
        <div className="nine borders hov">nine</div>
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




         
         
          
           
     
        

        









  
  

 




