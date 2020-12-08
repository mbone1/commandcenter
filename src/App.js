import '../src/stylesheets/style.scss'
import '../src/stylesheets/buttons.scss'
import React, { useState } from 'react';
import playlists from './playlists.js';

function App() {
  
  const [source, setSource] = useState("") //variable created to swap 'src' and change video displayed
  
  
  
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
      <div class="columns">
        <div class="column is-one-fifth has-text-right">
         
          <div class="list scroller has-text-right">{listItems}</div>
        </div>

        <div class="column is-four-fifths">
          <div class="columns"></div>
          <div class="row">&nbsp;</div>
          <div class="has-text-centered">
            <p class="woo">45:00 </p>
          </div>
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
