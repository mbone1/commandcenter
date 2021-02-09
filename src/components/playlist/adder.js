import React, { useState } from "react";
import { useSourceStore } from "./source.js";
import '../../stylesheets/adder.scss'
import SaveVideo from './saveVideo.js'

export default function Adder() {
  const [form, setForm] = useState("Watch video")
  const [source, setSource] = useSourceStore()
  
  // const handleChange = (e) => {
  //   //changes the value of video object to values entered in fields
  //   const { name, value } = e.target;
  //   setVideo({
  //     ...video,
  //     [name]: value,
  //   });
  // }
  // const handleSubmit = (e) => {
  //   //first prevents reload of page
  //   e.preventDefault();
  //   if (!video) return;
  //   saveToLocalStorage(video)
  //   setVideo({
  //     Name: "",
  //     SRC: ""})
  // }

  const handleWatchVid = (e) => {
    e.preventDefault();
    console.log(e)
    setSource(e.target[0].value);
  }


  return (
    <div className="threeFour borders">
      {/* form to add video to local storage */}
      <div className={form === "Add video" ? "borders" : "hidden"}>
      <SaveVideo/>
      </div>
     

      {/* form to source of video, does not save video*/}
      <form
        type="submit"
        className={form === "Watch video" ? "borders formAdder" : "hidden"}
        onSubmit={handleWatchVid}>
        <label>&nbsp;&nbsp;URL &nbsp;&nbsp;</label>
        <input
          type="text"
          name="SRC"
          className="borders"
          // value={source}
        ></input>
        <button className="invert submitbutton borders3" type="submit">
          {form}
        </button>
      </form>

      {/* form to add link to local storage */}

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


  

      


    
  
    
    

      



    
  





