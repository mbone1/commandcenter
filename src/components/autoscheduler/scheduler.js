import { DateTime, Duration } from "luxon";
import React, { useState, useEffect } from "react";
import '../../stylesheets/autoscheduler.scss'
import '../../stylesheets/clock.scss'
import Task from "../task/task";

const defaultTask = [
  {
    task: "get things done",
    isFocused: true,
    isSelected: true,
  },
  {
    task: "do not get things done",
    isFocused: true,
    isSelected: false,
  },
];

const taskChecker = () => {
  if (JSON.parse(localStorage.getItem("tasks")) === null) {
    return defaultTask;
  } else {
    return JSON.parse(localStorage.getItem("tasks"));
  }
};





  
  
  export default function AutoScheduler(length, tasks, breakLength, lunchLength, breakAmount) {
    const [date, setDate] = useState();
    const [selectedTasks, setSelectedTasks] = useState(defaultTask);
    const [unSelectedTasks, setUnSelectedTasks] = useState();

    const selectTask = (index) => {
      let taskArray = [];
      taskArray = JSON.parse(localStorage.getItem("tasks")) || [];
      taskArray[index].isSelected = true;
      localStorage.setItem("tasks", JSON.stringify(taskArray));
      setSelectedTasks(taskArray);
    }
    const unSelectTask = (index) => {
      let taskArray = [];
      taskArray = JSON.parse(localStorage.getItem("tasks")) || [];
      taskArray[index].isSelected = false;
      localStorage.setItem("tasks", JSON.stringify(taskArray));
      setSelectedTasks(taskArray);
    }

    const tasks1 = taskChecker().map((task, index) => (
      <div className="options">
        <button className="borders task-button" key={task.task} onClick={()=> selectTask(index)}>
          {task.task}<br></br>
          <button className="invert borders subtask-button">add</button>
        </button>
      </div>
    ));



const unSelectedTasksHolder = selectedTasks
  .filter((task) => !task.isSelected)
  .map((selectedTask, index) => (
    <>
      <div className="options">
        <button
          className="borders task-button"
          key={selectedTask.task}
          onClick={() => selectTask(index)}>
          {selectedTask.task}
          <br></br>
          <button className="invert borders subtask-button">add</button>
        </button>
      </div>
    </>
  ));
    
const selectedTasksHolder = selectedTasks
  .filter((task) => task.isSelected)
  .map((selectedTask, index) => (
    <>
      <div className="options">
        <button
          className="borders task-button"
          key={selectedTask.task}
          onClick={() => unSelectTask(index)}>
          {selectedTask.task}
          <br></br>
          <button className="invert borders subtask-button">remove</button>
        </button>
      </div>
    </>
  ));

    
    let startTime = DateTime.local().plus({ minutes: 5 }).toLocaleString(DateTime.TIME_WITH_SECONDS) //start time will always be offset by 5 minutes
    let endTime = DateTime.local().plus({ hours: 6 }).toLocaleString(DateTime.TIME_WITH_SECONDS) //will pass length into this to get end time, should convert to minutes?
    
        useEffect(() => {
          let timerID = setInterval(() => tick(), 1000);
          return function cleanup() {
            clearInterval(timerID);
          };
        });
        function tick() {
          setDate(new Date());
        }
    
    
    
    


    
    return (
      <div className="timecontainer">
        <div className="borders timeBlock title invertConst">
          AUTO-SCHEDULER
        </div>

        <div className="borders timeBlock selectorBox">
          <span className="selectorText"> premade shifts</span>
          <br></br>
          <div className="button-holder">
            <button className="shift-button invert borders">siesta</button>
            <button className="shift-button invert borders">straight 8</button>
            <button className="shift-button invert borders">straight 6</button>
            <button className="shift-button invert borders">straight 4</button>
            <button className="shift-button invert borders">regular 8</button>
            <button className="shift-button invert borders">regular 6</button>
            <button className="shift-button invert borders">regular 4</button>
          </div>
          <hr></hr>
          <span className="shift-title">custom shift</span>
          <br></br>
          <button className="shift-button invert borders">create</button>
          <br></br>
        </div>
        <div className="borders timeBlock">
          <div className="task-title borders invertConst">
            select tasks for shift
          </div>
          <div className="borders">
            <div className="schedulerTaskBox">{unSelectedTasksHolder}</div>
          </div>
        </div>
        <div className="borders timeBlock schedulerTaskBox">
          <span>tasks selected</span>
          {selectedTasksHolder}
        </div>

        <div className="borders timeBlock">
          <span className="options">Current Shift Start : {startTime}</span>
          <br></br>
          <span className="options">Lunch : beginning to end </span>
          <br></br>
          <span className="options">Current Shift End : {endTime}</span>
          <br></br>
          <button className="shift-button invert borders">begin</button>
        </div>
        <div className="borders pyramidHolder">
          <div className="borders block"></div>
          <div className="borders block"></div>
          <div className="borders block"></div>
          <div className="borders block"></div>
          <div className="borders block"></div>
          <div className="borders block"></div>
          <div className="borders block"></div>
          <div className="borders block"></div>
          <div className="borders block"></div>
          <div className="borders block"></div>
          
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>

      //form should - prompt then return relevant info...
      //user prompts up top
      //information compiled bottom
    );
    

}
