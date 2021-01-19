import React, { useState } from "react";

export default function TaskForm({ addTaskToLocalStorage }) {
    const [value, setValue] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue({
            // ...value,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTaskToLocalStorage(value)
        setValue("");
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input borders"
                value={value.task}
                name="task"
                onChange={handleChange}
            />
            
        </form>
    )
}