import '../src/stylesheets/style.scss'
import '../src/stylesheets/buttons.scss'
import React, { useState } from 'react';
import playlists from './playlists.js';
import Task from './components/task/task'
import TaskForm from './components/task/taskform'

export default function App() {
//variable created to swap 'src' and change video displayed
  const [source, setSource] = useState("");
  const [tasks, setTasks] = useState([
    {
      text: "Create Pomodoro Timer",
      isCompleted: false,
    },
    {
      text: "Rework Front-End",
      isCompleted: false,
    },
    {
      text: "Add functionality for persistence/PWA/Local Storage",
      isCompleted: false,
    },
  ]);
//ability to add a new task
  const addTask = (text) => {
    const newTasks = [...tasks, { text }];
    setTasks(newTasks);
  };
//complete task, changes to true
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = true;
    setTasks(newTasks);
  };
//delete/remove task referenced by index
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
//maps over playlist file and appends buttons to page, manipulates source of 'iframe' component
  const listItems = playlists.map((playlist) => (
    <>
      <button
        class="big-button"
        key={playlist.Name}
        content={playlist.Name}
        onClick={() => setSource(playlist.SRC)}>
        {playlist.Name}
      </button>
      <br />
    </>
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
              removeTask={removeTask}>
              {task}
            </Task>
          ))}
          <TaskForm addTask={addTask} />
          <div>
            
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}








  
  

 




