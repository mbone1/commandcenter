import React from 'react'
import moment from 'moment'

export default function Timer({ currentMode, currentTime }) {
    const [mode] = currentMode;
    const [time] = currentTime;

    return (
        <>
            <span>
                {mode === 'session' ? 'Session' : 'Break'}
            </span>
            <span>
            {moment(time).format('mm:ss')}
            </span>
            </>
    )

}