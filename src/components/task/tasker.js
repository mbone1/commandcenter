import React, { useState } from "react";
import Task from './task'
import TaskForm from './taskform'
import '../../stylesheets/tasker.scss'


export default function Tasker() {
  const [tasks, setTasks] = useState([
    {
      text: "Aspire to the purity of the blessed machine",
      isCompleted: false,
      isFocused: false,
    },
    {
      text: "Crave for strength and the certainty of steel",
      isCompleted: false,
      isFocused: false,
    },
    {
      text: "Add functionality for persistence/PWA/Local Storage",
      isCompleted: false,
      isFocused: false,
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
  //uncomplete task, changes to false
  const uncompleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = false;
    setTasks(newTasks);
  };
  //add focus to task, will be used to add class highlight task
  const focusTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isFocused = true;
    setTasks(newTasks);
  };
  //remove focus from task
  const unFocusTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isFocused = false;
    setTasks(newTasks);
  };
  //delete/remove task referenced by index
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    };
    
    return (
      <div className="tasks four hov borders">
        {tasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            completeTask={completeTask}
            uncompleteTask={uncompleteTask}
            removeTask={removeTask}
            focusTask={focusTask}
            unFocusTask={unFocusTask}>
            {task}
          </Task>
        ))}
        
          <TaskForm addTask={addTask} />
    
      </div>
    );
}