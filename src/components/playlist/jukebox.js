import React, { useState } from "react";


export default function Jukebox() {
  //variable created to swap 'src' and change video displayed
  const [source, setSource] = useState("");
  // retrieves playlist data from local storage, can i do an if statement to search first and then use something else if doesn't exist?
  let playlists = JSON.parse(localStorage.getItem('playlist'))
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
  return (<>
         <div class="playlist hov borders toprow one">{listItems}</div>
      <div className="viewscreenContainer toprow borders two hov">
      <iframe
          modestbranding="1"
          loop="1"
          color="white"
          fs="0"
          class="viewscreen row1"
          title={source}
          src={source}
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      </>
  )
}
  

    
            