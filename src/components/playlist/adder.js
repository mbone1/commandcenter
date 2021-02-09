import React, { useState } from "react";

import '../../stylesheets/adder.scss'
import SaveVideo from './saveVideo.js'
import WatchVideo from './watchVideo.js'

export default function Adder() {
  const [form, setForm] = useState("Watch video");
  
 

  return (
    <div className="threeFour borders">
      {/* form to add video to local storage */}
      <div className={form === "Add video" ? "borders" : "hidden"}>
        <SaveVideo />
      </div>
      {/* form to source of video, does not save video*/}
      <div className={form === "Watch video" ? "borders" : "hidden"}>
        <WatchVideo />
      </div>
      {/* form to add link to local storage */}
      <div className={form === "Add link" ? "borders" : "hidden"}>
        <WatchVideo />
      </div>


      <div className="switchButtons">
        <button
          className="invert submitbutton borders"
          type="submit"
          onClick={() => setForm("Add video")}>
          add video
        </button>
        <button
          className="invert submitbutton borders"
          type="submit"
          onClick={() => setForm("Watch video")}>
          watch video
        </button>
        <button
          className="invert submitbutton borders"
          type="submit"
          onClick={() => setForm("Add Link")}>
          add link
        </button>
      </div>
    </div>
  );
}


  

      


    
  
    
    

      



    
  





