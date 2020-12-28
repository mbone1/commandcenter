import React from 'react'
import moment from 'moment'
import '../../stylesheets/timer.scss'

export default function Timer({ currentMode, currentTime }) {
    const [mode] = currentMode;
    const [time] = currentTime;

    return (
        <>
            <span className="timerDisplay">
            {moment(time).format('mm:ss')}
            </span>
            <p className>
              Current Mode:  {mode === 'session' ? 'Session' : 'Break'}
            </p>
            </>
    )

}