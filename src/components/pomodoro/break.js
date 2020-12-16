import React, { useState } from 'react';
import moment from 'moment';

export default function Break() {
    const [breakLength, setBreakLength] = useState(300);
    
    const decrementBreakLength = () => {
        const newBreakLength = breakLength - 60;
        if (newBreakLength < 0) {
            setBreakLength(0);
        } else {
            setBreakLength(newBreakLength);
        }
    }
    const incrementBreakLength = () => setBreakLength(breakLength + 60)

    const breakLengthInMinutes = moment.duration(breakLength, 's').minutes();
    return <div>
        <span id="break-label">Break</span>
        <span id="break-length">{breakLengthInMinutes}</span>
        <button id="break-increment" onClick={incrementBreakLength}>+</button>
        <button id="break-decrement" onClick={decrementBreakLength}>-</button>
    </div>
}

