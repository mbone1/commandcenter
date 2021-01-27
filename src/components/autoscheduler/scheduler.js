import { DateTime, Duration } from "luxon";
import React, { useState, useEffect } from "react";
import '../../stylesheets/autoscheduler.scss'
import '../../stylesheets/clock.scss'


export default function AutoScheduler(length, tasks, breakLength, lunchLength, breakAmount) {
const [date, setDate] = useState();

    let startTime = DateTime.local().plus({ minutes: 5 }).toLocaleString(DateTime.TIME_WITH_SECONDS) //start time will always be offset by 5 minutes
    let endTime = DateTime.local().plus({ hours: 6 }).toLocaleString(DateTime.TIME_WITH_SECONDS) //will pass length into this to get end time, should convert to minutes?

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
      <div className="timecontainer">
        <div className="borders timeBlock title invertConst">
          AUTO SCHEDULER
        </div>
        <div className="borders timeBlock selectorBox">
          <span className="selectorText"> Select your shift</span>
          <br></br>
          <div className="button-holder">
            <button className="loc-button invert borders">siesta</button>
            <button className="loc-button invert borders">straight 8</button>
            <button className="loc-button invert borders">straight 6</button>
            <button className="loc-button invert borders">straight 4</button>
            <button className="loc-button invert borders">regular 8</button>
            <button className="loc-button invert borders">regular 6</button>
            <button className="loc-button invert borders">regular 4</button>
          </div>
        </div>

        <div className="borders timeBlock">
          <span>custom shift</span>
          <br></br>
          <button className="shift-button invert borders">create</button>
        </div>
        <br></br>
        <div>ability to enter shifts here (optional hours/minutes)</div>
        <br></br>
        <div>ability to enter lunch goes here (optional hours/minutes)</div>
        <br></br>
        <div>down here will be relevent info for entire day</div>
        <br></br>
        <div>Shift Length will go here</div>
        <br></br>
        <div>Start time = {startTime}</div>
        <div>End time = {endTime}</div>
        <br></br>
        <div className="borders timeBlock">
          each block of time will be stored within a bordered div like this
        </div>
        <div className="borders timeBlock">
          each block will display a begin time and end time
        </div>
        <div className="borders invertConst timeBlock">
          the current block of time will be inverted
        </div>
        <div className="borders timeBlock">
          each block will contain a task. much like tasker they will have a
          complete option
        </div>
      </div>

      //form should - prompt then return relevant info...
      //user prompts up top
      //information compiled bottom
    );
    

}
