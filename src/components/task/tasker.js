import React, { useState } from "react";
import Task from "./task";
import TaskForm from "./taskform";

const taskChecker = () => {
    if (JSON.parse(localStorage.getItem('tasks')) === null) {
        return defaultTask;
    } else {
        return JSON.parse(localStorage.getItem('tasks'))
    }
}
const defaultTask = [{
    task: "get things done",
    isFocused: true
  }]


export default function Tasker() {
  const [tasks, setTasks] = useState({});
  const [completed, setCompleted] = useState()
    const addTaskToLocalStorage = (data) => {
    //creates empty array
    let taskArray = [];
    //takes data from storage, parses out and places into empty array
      taskArray = JSON.parse(localStorage.getItem("tasks")) || [];
      console.log(taskArray)
    //pushes new data into playlist
    taskArray.push(data);
    //re-adds back to local storage with addition of new data
    localStorage.setItem("tasks", JSON.stringify(taskArray));
    //updates state
    setTasks(taskArray)    
    };
    

    const removeTaskFromLocalStorage = (index) => {
    //empty array to store local storage data    
    let taskArray = [];
    //array becomes the items retrieved from tasks    
    taskArray = JSON.parse(localStorage.getItem("tasks")) || [];
    //removes the selected task
    taskArray.splice(index, 1);
    //sets items minus the deleted item back in localStorage
    localStorage.setItem('tasks', JSON.stringify(taskArray))
    //updates state
      setTasks(taskArray)
      counter()
    };

    const focusTask = (index) => {
      //empty array to store local storage data
      let taskArray = [];
      //array becomes the items retrieved from tasks
      taskArray = JSON.parse(localStorage.getItem("tasks")) || [];
      
        taskArray[index].isFocused = true;
        
        localStorage.setItem('tasks', JSON.stringify(taskArray))
        
        setTasks(taskArray)
    };

    //remove focus from task
    const unFocusTask = (index) => {
      //empty array to store local storage data
      let taskArray = [];
      //array becomes the items retrieved from tasks
      taskArray = JSON.parse(localStorage.getItem("tasks")) || [];

      taskArray[index].isFocused = false;

      localStorage.setItem("tasks", JSON.stringify(taskArray));

      setTasks(taskArray);
    };

  const counter = () => {
    let count = parseInt(JSON.parse(localStorage.getItem("count"))) || [];
    let newCount = count + 1
    localStorage.setItem('count', JSON.stringify(newCount))
    setCompleted(newCount)
  }
 

    return (
      <div className="tasks eight hov borders3">
        <div className="borders taskbox">
          {taskChecker().map((task, index) => (
            <Task
              key={index}
              index={index}
              task={task}
              removeTaskFromLocalStorage={removeTaskFromLocalStorage}
              focusTask={focusTask}
              unFocusTask={unFocusTask}>
              {task[index]}
            </Task>
          ))}
        </div>
        <TaskForm addTaskToLocalStorage={addTaskToLocalStorage} />
      </div>
    );


    


}