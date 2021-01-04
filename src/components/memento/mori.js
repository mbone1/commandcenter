import React, { useEffect, useState } from "react";

//based off code from https://github.com/do-community/react-hooks-timer

export default function Mori() {
   


    let years = [2022, 2023, 2024, 2025, 2030, 2040, 2050, 2060, 2070]
    
    const calculateTimeLeft = () => {
      let year = 2060
      let twentytwentytwo = 2022
      let twentytwentythree = 2023
      let twentytwentyfour = 2024
      let twentytwentyfive = 2025
      let twentythirty = 2030
      let twentyforty = 2040
      let twentyfifty = 2050
      let twentysixty = 2060
      let twentyseventy = 2070
      

    const difference = +new Date(`${twentyfifty}-7-15`) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        // seconds: Math.floor((difference / 1000) % 60),
      };
    }


      return timeLeft;
      
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
    
  return (
    <div>
          <h1>MEMENTO MORI</h1>

       
          {/* <p>2022 - {components}</p> */}
          <p>2022 - {timerComponents}</p>
          <p>2023 - {timerComponents}</p>
          <p>2024 - {timerComponents}</p>
          <p>2025 - {timerComponents}</p>
          <p>2030 - {timerComponents}</p>
          <p>2040 - {timerComponents}</p>
          <p>2050 - {timerComponents}</p>
          <p>2060 - {timerComponents}</p>
      <p>2070 - {timerComponents}</p>
    </div>
  );
}
