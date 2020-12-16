import React, { useState } from "react";
import moment from "moment";

export default function Session() {
  const [sessionLength, setSessionLength] = useState(300);

  const decrementSessionLength = () => {
    const newSessionLength = sessionLength - 60;
    if (newSessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  };
  const incrementSessionLength = () => setSessionLength(sessionLength + 60);

  const sessionLengthInMinutes = moment.duration(sessionLength, "s").minutes();
  return (
    <div>
      <span id="Session-label">Session</span>
      <span id="Session-length">{sessionLengthInMinutes}</span>
      <button id="Session-increment" onClick={incrementSessionLength}>
        +
      </button>
      <button id="Session-decrement" onClick={decrementSessionLength}>
        -
      </button>
    </div>
  );
}
