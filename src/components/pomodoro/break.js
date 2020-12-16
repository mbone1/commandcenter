import React, { useState } from 'react';
import moment from 'moment';

export default function Break() {
    const [breakLengthInSeconds, setBreakLengthInSeconds] = useState(300);
    
    const decrementBreakLengthByOneMinute = () => {
        const newBreakLengthInSeconds = breakLengthInSeconds - 60;
        if (newBreakLengthInSeconds < 0) {
            setBreakLengthInSeconds(0);
        } else {
            setBreakLengthInSeconds(newBreakLengthInSeconds);
        }
    }
    const incrementBreakLengthByOneMinute = () => setBreakLengthInSeconds(breakLengthInSeconds + 60)

    const breakLengthInMinutes = moment.duration(breakLengthInSeconds, 's').minutes();
    return <div>
        <span id="break-label">Break</span>
        <span id="break-length">{breakLengthInMinutes}</span>
        <button id="break-increment" onClick={incrementBreakLengthByOneMinute}>+</button>
        <button id="break-increment" onClick={decrementBreakLengthByOneMinute}>-</button>
    </div>
}

