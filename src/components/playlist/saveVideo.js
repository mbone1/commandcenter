import { useState } from "react";

export default function SaveVideo() {
const [video, setVideo] = useState({});

const handleChange = (e) => {
  //changes the value of video object to values entered in fields
  const { name, value } = e.target;
  setVideo({
    ...video,
    [name]: value,
  });
};

const handleSubmit = (e) => {
  //first prevents reload of page
  e.preventDefault();
  if (!video) return;
  saveToLocalStorage(video);
  setVideo({
    Name: "",
    SRC: "",
  });
};
  
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
  };
    
  return (
    <form className='formAdder'>
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
        onClick={handleSubmit}>Add Video</button>
      <span></span>
    </form>
  );
}
       

