import React, { useState } from "react";


export default function TaskForm({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    saveToLocalStorage(value)
    setValue("");
  };

     const saveToLocalStorage = (data) => {
       //creates empty array
       let listArray = [];
       //takes data from storage, parses out and places into empty array
       listArray = JSON.parse(localStorage.getItem("tasks")) || [];
       //pushes new data into playlist
       listArray.push(data);
       //re-adds back to local storage with addition of new data
       localStorage.setItem("tasks", JSON.stringify(listArray));
     };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input borders"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
