import React, { useState, useEffect } from "react";
import '../../stylesheets/clock.scss'
import { DateTime } from 'luxon';

let local;
let losAngeles = 'America/Los_Angeles'
let phoenix = 'America/Phoenix'
let newYork = 'America/New_York'
let utc = "utc"


export default function Clock() {

  const [date, setDate] = useState()
  const [location, setLocation] = useState(local);

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
          {DateTime.local()
            .setZone(location)
            .toLocaleString(DateTime.TIME_WITH_SECONDS)}
        </div>

        <div className="hov date">
          {DateTime.local()
            .setZone(location)
            .toLocaleString(DateTime.DATE_HUGE)}
        <button className='loc-button invert borders' onClick={() => setLocation(local)}>local</button>
        <button className='loc-button invert borders' onClick={() => setLocation(losAngeles)}>pst</button>
        <button className='loc-button invert borders' onClick={() => setLocation(phoenix)}>mst</button>
        <button className='loc-button invert borders' onClick={() => setLocation(utc)}>utc</button>
        <button className='loc-button invert borders' onClick={() => setLocation(newYork)}>est</button>
        </div>
      </div>
    );

   

}

