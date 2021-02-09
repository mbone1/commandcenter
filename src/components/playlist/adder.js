import React, { useState } from "react";
import '../../stylesheets/adder.scss'
import SaveVideo from './saveVideo.js'
import WatchVideo from './watchVideo.js'
import SaveLink from './saveLink.js'


export default function Adder() {
  const [form, setForm] = useState();
  
 

  return (
    <div className="threeFour borders">
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
          onClick={() => setForm("Add link")}>
          add link
        </button>
      </div>
      {/* form to add video to local storage */}
      <div className={form === "Add video" ? "" : "hidden"}>
        <SaveVideo />
      </div>
      {/* form to source of video, does not save video*/}
      <div className={form === "Watch video" ? "" : "hidden"}>
        <WatchVideo />
      </div>
      {/* form to add link to local storage */}
      <div className={form === "Add link" ? "" : "hidden"}>
        <SaveLink />
      </div>
    </div>
  );
}


  

      


    
  
    
    

      



    
  





