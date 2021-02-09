import React, { useState } from "react";
import defaultPlaylist from "../../playlists";
import { useSourceStore } from "./source.js";

export default function Jukebox() {
  //uses store created for source, can also be updated via adder component for one time add
  const [source, setSource] = useSourceStore();
  
  // runs a check to see if any data is present in local storage, returns a default playlist if not
  const playlistChecker = () => {
    if (JSON.parse(localStorage.getItem('playlist')) === null) {
      return defaultPlaylist;
    } else {
      return JSON.parse(localStorage.getItem("playlist"));
    }
  };

  //maps over playlist file and appends buttons to page, manipulates source of 'iframe' component
  const listItems = playlistChecker().map((playlist) => (
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


  

    
            