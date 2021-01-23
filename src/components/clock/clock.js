import React, { useState, useEffect } from "react";
import '../../stylesheets/clock.scss'

export default function Clock() {
  const [date, setDate] = useState('')
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

   
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });
    function tick() {
      setDate(new Date());
    }

    return (
      <div className='eight borders timecontainer'>
        <br></br>
        <div className="hov time">{date.toLocaleTimeString('en-GB')}</div>
       
        <div className="hov borders date">{date.toLocaleDateString('en-US', options)}</div>
        </div>)
}

