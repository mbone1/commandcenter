import { waitForDomChange } from "@testing-library/react";

import React, { useState, useEffect } from "react";

export default function Clock() {
   const [date, setDate] = useState('')
   
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
        
        <div className="eight borders hov clock">{date.toLocaleString()}</div>)
}