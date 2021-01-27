import { DateTime } from "luxon";
import React, { useState, useEffect } from "react";


export default function AutoScheduler(length, tasks, breakLength, breakAmount) {
const [date, setDate] = useState();

    let startTime = DateTime.local().toLocaleString(DateTime.TIME_WITH_SECONDS)

    useEffect(() => {
      let timerID = setInterval(() => tick(), 1000);
      return function cleanup() {
        clearInterval(timerID);
      };
    });
    function tick() {
      setDate(new Date());
    }
    return (
        <>
            <div>Start time = {startTime}</div>
            </>

    )
    

}
