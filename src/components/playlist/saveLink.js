import { useState } from "react";


export default function SaveLink() {
    const [link, setLink] = useState({});
    
    
const saveToLocalStorage = (data) => {
    let listArray = [];
    listArray = JSON.parse(localStorage.getItem("links")) || [];
    listArray.push(data);
    localStorage.setItem("links", JSON.stringify(listArray));
}
    
const handleChange = (e) => {
  //changes the value of video object to values entered in fields
  const { name, value } = e.target;
  setLink({
    ...link,
    [name]: value,
  });
};
    
const handleSubmit = (e) => {
  //first prevents reload of page
  e.preventDefault();
  if (!link) return;
  saveToLocalStorage(link);
  setLink({
    Name: "",
    SRC: "",
  });
};

return (
  <form className="formAdder">
    <label className="">NAME </label>
    <input
      type="text"
      name="Name"
      className="borders"
      value={link.name}
      onChange={handleChange}></input>
    <br></br>
    <label>&nbsp;&nbsp;URL &nbsp;&nbsp;</label>
    <input
      type="text"
      name="SRC"
      className="borders"
      value={link.value}
      onChange={handleChange}></input>
    <br></br>
    <button
      className="invert submitbutton borders3"
      type="submit"
      onClick={handleSubmit}>
      Add Link
    </button>
    <span></span>
  </form>
);
    

    
}