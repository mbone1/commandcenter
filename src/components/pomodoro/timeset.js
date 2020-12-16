import React from 'react'

export default function TimeSet({ type, value }) {
    const [val, setVal] = value
    const handleIncrement = () => {
        if (val >= 60) {
            return null
        } else {
            setVal(val + 1)
        }
    }
    
    const handleDecrement = () => {
        if (val === 1) {
            return null
        } else {
            setVal(val - 1)
        }
    }
    
    return (
        <>
            
            <span>{type} Length</span> 
            <button onClick={handleIncrement} />
            <span>{val}</span>
            <button onClick={handleDecrement} />
            
     </>       
        )
    }