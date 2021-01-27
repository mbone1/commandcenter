import { DateTime, Duration } from "luxon";
import React, { useState, useEffect } from "react";


export default function AutoScheduler(length, tasks, breakLength, breakAmount) {
const [date, setDate] = useState();

    let startTime = DateTime.local().plus({ minutes: 5 }).toLocaleString(DateTime.TIME_WITH_SECONDS)
    let endTime = DateTime.local().plus({ hours: 6 }).toLocaleString(DateTime.TIME_WITH_SECONDS)
    let dur = Duration.fromObject({ hours: 6 }) //length will be stored here
    console.log(dur.as('minutes'))

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
            <div>End time = {endTime}</div>
            </>

    )
    

}
