import React, { useState } from "react";
import '../../stylesheets/tasker.scss'

export default function TaskForm({ addTaskToLocalStorage }) {
    const [value, setValue] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue({
            // ...value,
            [name]: value,
          isFocused: false,
            isSelected: false
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTaskToLocalStorage(value)
        setValue({task: ""});
    }

    const count = localStorage.getItem('count')


    return (
      <div className="formBox borders">
        <form className onSubmit={handleSubmit}>
          <input
            type="text"
            className="input borders form"
            value={value.task}
            name="task"
            onChange={handleChange}
          />
          <div className="alignRight borders">
            <span>Tasks Completed </span>
            <span>{count}</span>
          </div>
      </form>
        </div>
    );
}