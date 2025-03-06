
import React, { useState } from 'react';


export default function Counter() {

    const [count, setCount] = useState<number>(0)

    const increment = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <p>Count: {count}</p>
        </div>
    )
}
