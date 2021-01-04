import React, { useEffect, useState } from "react";

//original code from https://github.com/do-community/react-hooks-timer

export default function Mori() {
  const calculateTimeLeft = () => {
    let year = 2060

    const difference = +new Date(`${year}-7-15`) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        // minutes: Math.floor((difference / 1000 / 60) % 60),
        // seconds: Math.floor((difference / 1000) % 60),
      };
    }


    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

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
      <p>2022 -</p>    
      <p>2023 -</p>    
      <p>2024 -</p>    
      <p>2025 -</p>    
      <p>2030 -</p>    
      <p>2040 -</p>    
      <p>2050 - {timerComponents.length ? timerComponents : <span>Time's up!</span>}</p>
      <p>2060 - {timerComponents.length ? timerComponents : <span>Time's up!</span>}</p>
      <p>2070 - {timerComponents.length ? timerComponents : <span>Time's up!</span>}</p>
    </div>
  );
}
