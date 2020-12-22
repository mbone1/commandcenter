import React from 'react'
import '../../stylesheets/timer.scss'
import '../../stylesheets/common.scss'

export default function Controls({ activeStatus, handleReset }) {
    const [active, setActive] = activeStatus
    return (
      <>
        <button className="timer-button invert" onClick={() => setActive(!active)}>
          {active ? <span>&#10074;&#10074;</span> : <span>&#9658;</span>}
        </button>
        <button className="timer-button invert" onClick={handleReset}> &#8635;</button>
        <br/>
      </>
    );
}