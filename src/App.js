import '../src/stylesheets/style.scss'
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
        class="playlist-button"
        key={playlist.Name}
        content={playlist.Name}
        onClick={() => setSource(playlist.SRC)}>
        {playlist.Name.toUpperCase()}
      </button>
      <br />
    </>
  ));

  return (
    <div class="container">
        <div class="playlist">{listItems}</div>
        <iframe
          class="viewscreen"
          title={source}
          src={source}
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen/>
          <Pomodoro />
        <Tasker />
  </div>
);
  
}

    
    
  
        
            
       
     
      
       

  
  
  {/* <img class="border" src={Fela} width="300" height="500"></img> */}
  {/* <iframe
    src="https://www.google.com/webhp?igu=1"
    width="840"
    height="472.5"></iframe> */}




         
         
          
           
     
        

        









  
  

 




