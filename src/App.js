import '../src/style.scss'
import React, { useState } from 'react';
import playlists from './playlists.js';

function App() {
  const [source, setSource] = useState("")
  //maps over playlist file and appends buttons to page, manipulates source of 'iframe' component
  let listItems = playlists.map((playlist) => (
    <><button
      class="big-button"
      key={playlist.Name}
      content={playlist.Name}
    onClick={() => setSource(playlist.SRC)}
    >
      {playlist.Name}
    </button>
    <br/></>
  ));
  

 



  return (
    <div className="App">
      <div class="has-text-centered">
        <p class="woo">45:00 </p>
      </div>
      <div class="has-text-centered">
        <form>
          <span>Length of timer</span>
          <input></input>
        </form>
      </div>
      <div class="columns">
        <div class="column is-two-fifths has-text-right">
          <div class="row">&nbsp;</div>
          <div class="row">&nbsp;</div>

     
          <div>
            {listItems}
            </div>
    

       
          
        </div>

        <div class="column is-three-fifths">
          <div class="columns"></div>
          <div class="row">&nbsp;</div>
          <div class="row">&nbsp;</div>
          <iframe
            class="video"
            width="840"
            height="472.5"
            src={source}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
