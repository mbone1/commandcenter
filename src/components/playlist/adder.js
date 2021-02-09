import React, { useState } from "react";
import { useSourceStore } from "./source.js";
import '../../stylesheets/adder.scss'

export default function Adder() {
  const [video, setVideo] = useState({})
  const [form, setForm] = useState("Watch video")
  const [source, setSource] = useSourceStore()
  
  const handleChange = (e) => {
    //changes the value of video object to values entered in fields
    const { name, value } = e.target;
    setVideo({
      ...video,
      [name]: value,
    });
  }
  const handleSubmit = (e) => {
    //first prevents reload of page
    e.preventDefault();
    if (!video) return;
    saveToLocalStorage(video)
    setVideo({
      Name: "",
      SRC: ""})
  }

  const handleWatchVid = (e) => {
    e.preventDefault();
    console.log(e)
    setSource(e.target[0].value);
  }

  //function below saves to storage
  const saveToLocalStorage = (data) => {
    //creates empty array
    let listArray = [];
    //takes data from storage, parses out and places into empty array
    listArray = JSON.parse(localStorage.getItem("playlist")) || [];
    //pushes new data into playlist
    listArray.push(data);
    //re-adds back to local storage with addition of new data
    localStorage.setItem("playlist", JSON.stringify(listArray));
  }
  return (
    <div className="threeFour borders">
      {/* form to add video to local storage */}
      <form className={form === "Add video" ? "borders formAdder" : "hidden"}>
        <label className="">NAME </label>
        <input
          type="text"
          name="Name"
          className="borders"
          value={video.name}
          onChange={handleChange}></input>
        <br></br>
        <label>&nbsp;&nbsp;URL &nbsp;&nbsp;</label>
        <input
          type="text"
          name="SRC"
          className="borders"
          value={video.value}
          onChange={handleChange}></input>
        <br></br>
        <button
          className="invert submitbutton borders3"
          type="submit"
          onClick={handleSubmit}>
          {form}
        </button>
        <span></span>
      </form>

      {/* form to source of video, does not save video*/}
      <form
        type='submit'
        className={form === "Watch video" ? "borders formAdder" : "hidden"}
        onSubmit={handleWatchVid}>
        <label>&nbsp;&nbsp;URL &nbsp;&nbsp;</label>
        <input
          type="text"
          name="SRC"
          className="borders"
          // value={source}
          ></input>
        <button
          className="invert submitbutton borders3"
          type="submit">
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


  

      


    
  
    
    

      



    
  





