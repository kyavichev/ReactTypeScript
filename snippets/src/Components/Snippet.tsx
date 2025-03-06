
import React, { useState } from 'react';


export default function Snippet() {

    const [value, setValue] = useState<string>("");

    function handleChange(event: any) {
        setValue(event.target.value);
    }
   
    return (
      <div>
        <input type="text" value={value} onChange={handleChange} />
        <p>You entered: {value}</p>
      </div>
    );
  }