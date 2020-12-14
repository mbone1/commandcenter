import '../src/stylesheets/style.scss'
import '../src/stylesheets/buttons.scss'
import React, { useState } from 'react';
import playlists from './playlists.js';



function Task({ task, index, completeTask, removeTask }) {
  return (
    <div className="goal">
      {task.text}
      <div>
        <button onClick={() => completeTask(index)}>Complete</button>\
        <button onClick={() => removeTask(index)}>X</button>
      </div>
    </div>
  )
} 

function TaskForm({ addTask }) {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}/>
    </form>
  )
}




function App() {
  
  const [source, setSource] = useState("") //variable created to swap 'src' and change video displayed

  const [tasks, setTasks] = useState([
    {
      text: "Rework Front-End",
      isCompleted: false
    },
  ])

  const addTask = text => {
    const newTasks = [...tasks, { text }];
    setTasks(newTasks)
  }

  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = true;
    setTasks(newTasks)
  }

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }
  
  
  
  //maps over playlist file and appends buttons to page, manipulates source of 'iframe' component
  const listItems = playlists.map((playlist) => (
    <><button
      class="big-button"
      key={playlist.Name}
      content={playlist.Name}
    onClick={() => setSource(playlist.SRC)}
    >
      {playlist.Name}
    </button>
    <br/></>
  ));
  

 



  return (
    <div className="App">
      <div class="columns">
        <div class="column is-one-fifth has-text-right">
          <div class="list scroller has-text-right">{listItems}</div>
        </div>

        <div class="column is-three-fifths">
          <div class="has-text-left">
            <div class="timer"></div>
          </div>
          <div class="row">&nbsp;</div>
          <iframe
            class="video"
            title={source}
            width="840"
            height="472.5"
            src={source}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
        <div class="column is-one-fifth">
          Todays goal is{" "}
          {tasks.map((task, index) => (
            <Task
              key={index}
              index={index}
              task={task}
              completeTask={completeTask}
              removeTask={removeTask}  
            >{task}</Task>
          ))}
          <TaskForm addTask={addTask} />
          
        </div>
      </div>
    </div>
  );
}

export default App;
