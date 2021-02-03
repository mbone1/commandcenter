import { DateTime, Duration } from "luxon";
import React, { useState, useEffect } from "react";
import littleSwitch from './littleSwitch'
import '../../stylesheets/autoscheduler.scss'
import '../../stylesheets/clock.scss'
import taskChecker from './taskChecker'

export default function AutoScheduler() {
  const [date, setDate] = useState();
  const [tasks, setTasks] = useState(taskChecker);

  //retrieves task from local storage then changes isSelected to T/F depending on current state
  const selectTask = (index) => {
    let taskArray = [];
    taskArray = JSON.parse(localStorage.getItem("tasks")) || [];
    littleSwitch(taskArray, index);
    localStorage.setItem("tasks", JSON.stringify(taskArray));
    setTasks(taskArray);
  };

  //maps over tasks, hides those where task.isSelected is === true
  const unSelectedTasksHolder = tasks.map((task, index) => (
    <>
      <div className="options">
        <button
          className={task.isSelected ? "borders task-button" : "hidden"}
          key={task.task}>
          {task.task}
          <br></br>
          <button
            className="invert borders subtask-button"
            onClick={() => selectTask(index)}>
            add {index}
          </button>
        </button>
      </div>
    </>
  ));
  
  //maps over tasks, hides those where task.isSelected is === false
  const selectedTasksHolder = tasks.map((task, index) => (
    <>
      <div className="options">
        <button
          className={!task.isSelected ? "borders task-button" : "hidden"}
          key={task.task}>
          {task.task}
          <br></br>
          <button
            className="invert borders subtask-button"
            onClick={() => selectTask(index)}>
            remove {index}
          </button>
        </button>
      </div>
    </>
  ));

  let startTimeEXAMPLE = DateTime.local()
    .plus({ minutes: 5 })
    .toLocaleString(DateTime.TIME_WITH_SECONDS); //start time will always be offset by 5 minutes
  let endTimeEXAMPLE = DateTime.local()
    .plus({ hours: 6 })
    .toLocaleString(DateTime.TIME_WITH_SECONDS); //will pass length into this to get end time, should convert to minutes?

  const scheduleMaker = (
    startTime,
    endTime,
    lunchLength,
    breakAmount,
    selectedTasks
  ) => {
    const shiftLength = endTime - startTime;
    let lunchStartTime = shiftLength - shiftLength / 2 - lunchLength / 2;
    let shift = [];
  };
        

  let exampleShift = [
    {
      startTime: "9:00 AM",
      endTime: "10:00 AM",
      task: "example task",
    },
  ];

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
    <div className="five borders">
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
        <div className="borders timeBlock taskBlock">
          <div className="task-title borders invertConst">
            select tasks for shift
          </div>
          <div className="borders">
            <div className="schedulerTaskBox">{unSelectedTasksHolder}</div>
          </div>
        </div>
        <div className="borders timeBlock schedulerTaskBox taskBlock">
          <div className="task-title borders invertConst">tasks selected</div>
          {selectedTasksHolder}
        </div>

        <div className="borders timeBlock">
          <span className="options">
            Current Shift Start : {startTimeEXAMPLE}
          </span>
          <br></br>
          <span className="options">Lunch : beginning to end </span>
          <br></br>
          <span className="options">Current Shift End : {endTimeEXAMPLE}</span>
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
    </div>
  );
}
    

      
        
       



      
    
    
    
    
    
    


    
