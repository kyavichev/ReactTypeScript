
import React, { useState } from 'react';
import './Counter.css';


export default function Counter() {

    const [count, setCount] = useState<number>(0)

    const increment = () => {
        setCount(count + 1)
    }
    return (
        <div className="counter-main">
            <button onClick={increment}>Increment</button>
            <p>Count: {count}</p>
        </div>
    )
}
