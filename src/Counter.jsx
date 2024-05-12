import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount((prevValue) => prevValue + 1);
    }

    const handleDecrement = () => {
        setCount((prevValue) => prevValue - 1);
    }
  return (
    <div>
        <h1>Counter App</h1>
        <p>Count: {count} </p>
        <div>
            <button type="submit" onClick={handleIncrement}>Increment</button>
            <button type="submit" onClick={handleDecrement}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter