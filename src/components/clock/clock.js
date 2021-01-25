import React, { useState, useEffect } from "react";
import '../../stylesheets/clock.scss'
import { DateTime } from 'luxon';


export default function Clock() {
  const [date, setDate] = useState(new Date())
  let local = DateTime.local()

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
          {local.toLocaleString(DateTime.TIME_WITH_SECONDS)}
        </div>

        <div className="hov borders date">
          {local.toLocaleString(DateTime.DATE_HUGE)}
        </div>
      </div>
    );

   

}

