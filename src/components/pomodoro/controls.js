import React from 'react'

export default function Controls({ activeStatus, handleReset }) {
    const [active, setActive] = activeStatus
    return (
      <>
        <button onClick={() => setActive(!active)}>
          {active ? <span>&#10074;&#10074;</span> : <span>&#9658;</span>}
        </button>
        <button onClick={handleReset}> &#8635;</button>
      </>
    );
}