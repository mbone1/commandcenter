import React, { useState } from "react";
import Task from './task'
import TaskForm from './taskform'


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
  //delete/remove task referenced by index
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    };
    
    return (
      <>
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
      </>
    );
}