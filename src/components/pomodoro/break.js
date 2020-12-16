import React, {useState} from 'react';

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
    return <div>
        <span id="break-label">Break</span>
        <span id="break-length">{breakLengthInSeconds}</span>
        <button id="break-increment" onClick={incrementBreakLengthByOneMinute}>+</button>
        <button id="break-increment" onClick={decrementBreakLengthByOneMinute}>-</button>
    </div>
}

