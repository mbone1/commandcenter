import React from 'react'
import '../../stylesheets/timer.scss'

export default function TimeSet({ type, value }) {
    const [val, setVal] = value
    const handleIncrement = () => {
        if (val >= 60) {
            return null
        } else {
            setVal(val + 1)
        }
    }
    
    const handleDecrement = () => {
        if (val === 1) {
            return null
        } else {
            setVal(val - 1)
        }
    }
    
    return (
      <>
        <p>{type} Length</p>
        <button className="timer-button" onClick={handleIncrement}>
          {" "}
          &nbsp; + &nbsp;{" "}
        </button>
        <span>{val}</span>
        <button className="timer-button" onClick={handleDecrement}>
          {" "}
          &nbsp; - &nbsp; {" "}
        </button>
      </>
    );
    }