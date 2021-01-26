import React, { useState, useEffect } from "react";
import '../../stylesheets/clock.scss'
import { DateTime } from 'luxon';



export default function Clock() {
  let local = {
    time: DateTime.local()
    .toLocaleString(DateTime.TIME_WITH_SECONDS),
    date: DateTime.local()
    .toLocaleString(DateTime.DATE_HUGE)
  }
  let ps = {
    time: DateTime.local()
    .setZone("America/Los_Angeles")
    .toLocaleString(DateTime.TIME_WITH_SECONDS),
    date: DateTime.local()
    .setZone("America/Los_Angeles")
    .toLocaleString(DateTime.DATE_HUGE),
  };
  const [date, setDate] = useState()
  const [dateState, setDateState] = useState(false)
  const [location, setLocation] = useState('America/Phoenix');
  const [spongus, setSpongus] = useState("spongus")

  // function display() {
  //   if (active === true) {
  //     display === local;
  //    return display
  //   } else {
  //       display === ps
  //    return display 
  //   }
  // }
  // function switcher(zone) {
  //   if (zone === "local")
  //   {
  //     let active = local
  //     return active
  //     console.log(active)
  //   }
  //   else if (zone === "pst")
  //   {
  //     let active = ps
  //   return active}
  //   else {
  //     let active = local
  //     return active
  //   }
    
  // }
  // switcher("local")
  // console.log(switcher("local"))
  // function handleClick() {
  //   setDateState(false)
  // }
  let phoenix = 'America/Phoenix'
  let la = 'America/Los_Angeles'
  let decider = dateState ? {phoenix} : {la}

  // useEffect(() => {
  //   let timerID = setInterval(() => tick(), 1000);
  //   return function cleanup() {
  //     clearInterval(timerID);
  //   };
  // });
  //   function tick() {
  //     setDate(new Date());
  //   }

    return (
      <div className="eight borders timecontainer">
        <br></br>
        <div className="hov time">
          {dateState ? <>{local.time}</> : <>{ps.time}</>}
          {/* {DateTime.local()
            .setZone(location)
    .toLocaleString(DateTime.TIME_WITH_SECONDS)} */}
        </div>

        <div className="hov borders date">
          {dateState ? <>{local.date}</> : <>{ps.date}</>}
        </div>
        <button onClick={setSpongus("tingus")}>{spongus}</button>
      </div>
    );

   

}

