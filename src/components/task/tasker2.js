import React, { useState } from "react";
import Task from "./task";
import TaskForm from "./taskform";

export default function Tasker() {
    const [tasks, setTasks] = useState({});

    const addTaskToLocalStorage = (data) => {
    //creates empty array
    let taskArray = [];
    //takes data from storage, parses out and places into empty array
    taskArray = JSON.parse(localStorage.getItem("tasks")) || [];
    //pushes new data into playlist
    taskArray.push(data);
    //re-adds back to local storage with addition of new data
    localStorage.setItem("tasks", JSON.stringify(listArray));
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
    };

    const focusTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isFocused = true;
    };

    //remove focus from task
    const unFocusTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isFocused = false;
    };

    const taskChecker = () => {
        if (JSON.parse(localStorage.getItem('tasks')) === null) {
            return defaultTask;
        } else {
            return JSON.parse(localStorage.getItem('tasks'))
        }
    }
 

    return (
    <div className="tasks four hov borders">
        {tasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            completeTask={removeTaskFromLocalStorage}
            focusTask={focusTask}
            unFocusTask={unFocusTask}>
            {task}
          </Task>
        ))}
        
          <TaskForm addTask={addTask} />
    </div>
)


    


}