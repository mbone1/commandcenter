import React, { useState } from "react";
import playlists from '../../playlists.js'

let newMix = {} //variable where new vid will be placed

export default function Adder() {
  const [value, setValue] = useState({})
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
  }
  const handleChange = (e) => {
      setValue(e.target.value)
  }
      
  const saveToLocalStorage = (data) => {
    //creates empty array
    let listArray = [];
    //takes data from storage, parses out and places into empty array
    listArray = JSON.parse(localStorage.getItem("spongus")) || [];
    //pushes new data into playlist
    listArray.push(data);
    //re-adds back to local storage with addition of new data
    localStorage.setItem("spongus", JSON.stringify(listArray));
  }

  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" onChange={handleChange}></input>
        <br></br>
        <label>URL</label>
        <input type="text" onChange={handleChange}></input>
        <button type="submit"></button>
      </form>
    </div>
  );


    
  


}



