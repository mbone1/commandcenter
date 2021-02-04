import React, { useState } from "react";
import { useSourceStore } from "./source.js";
import '../../stylesheets/adder.scss'

export default function Adder() {
  const [video, setVideo] = useState({})
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
      <form className="borders formAdder">
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
          Submit
        </button>
      </form>
      <div className="switchButtons">
        <button className="invert submitbutton borders" type="submit">
          add video
        </button>
        <button className="invert submitbutton borders" type="submit">
          watch video
        </button>
        <button className="invert submitbutton borders" type="submit">
          add link
        </button>
      </div>
    </div>
  );
}


  

      


    
  
    
    

      



    
  





