import React, { useState } from "react";
import Task from './task'
import TaskForm from './taskform'
import '../../stylesheets/tasker.scss'


export default function Tasker() {
  const [tasks, setTasks] = useState([
    {
      text: "Create Pomodoro Timer",
      isCompleted: true,
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
  //uncomeplete task, changes to false
  const uncompleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = false;
    setTasks(newTasks);
  };
  //delete/remove task referenced by index
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    };
    
    return (
      <div className="tasks four hov">
        {tasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            completeTask={completeTask}
            uncompleteTask={uncompleteTask}
            removeTask={removeTask}>
            {task}
          </Task>
        ))}
        
          <TaskForm addTask={addTask} />
    
      </div>
    );
}