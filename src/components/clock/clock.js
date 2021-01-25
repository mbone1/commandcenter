import React, { useState, useEffect } from "react";
import '../../stylesheets/clock.scss'
import { DateTime } from 'luxon';


export default function Clock() {
  const [date, setDate] = useState(new Date())
  const [timezone, setTimeZone] = useState()
  let localTime = DateTime.local().toLocaleString(DateTime.TIME_WITH_SECONDS);
  let localDate = DateTime.local().toLocaleString(DateTime.DATE_HUGE);
  let psTime = DateTime.local().setZone('America/Los_Angeles').toLocaleString(DateTime.TIME_WITH_SECONDS)
  let psDate = DateTime.local().setZone('America/Los_Angeles').toLocaleString(DateTime.DATE_HUGE)

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
      <div className="eight borders timecontainer">
        <br></br>
        <div className="hov time">
          {localTime}
        </div>

        <div className="hov borders date">
          {localDate}
        </div>
      </div>
    );

   

}

