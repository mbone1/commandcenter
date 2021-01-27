import React, { useState, useEffect } from "react";
import '../../stylesheets/clock.scss'
import { DateTime } from 'luxon';
import timeZones from '../clock/timezones'


export default function Clock() {

  const [date, setDate] = useState()
  const [location, setLocation] = useState(timeZones.local);
  const timeZoneButtons = timeZones.map((zone) => (
    <>
      <button
        className="loc-button invert borders"
        onClick={() => setLocation(zone.string)}>
        {zone.tz}
      </button>
    </>
  ));

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
        <div className="hov time borders invertConst">
          {DateTime.local()
            .setZone(location)
            .toLocaleString(DateTime.TIME_WITH_SECONDS)}
        </div>

        <div className="hov date">
          {DateTime.local()
            .setZone(location)
            .toLocaleString(DateTime.DATE_HUGE)}
          {timeZoneButtons}
         
        </div>
      </div>
    );

   

}

