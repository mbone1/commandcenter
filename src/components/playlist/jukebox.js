
import React, { useState } from "react";
import playlists from '../../playlists'

export default function Jukebox() {
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
    
    return (<>
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
        </>
    )
}