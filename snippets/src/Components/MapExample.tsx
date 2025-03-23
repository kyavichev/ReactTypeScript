
import React, { useState } from 'react';


export default function MapExample() {
   
    const items = [
        { id: 1, text: "Hat" },
        { id: 2, text: "Shirt" },
        { id: 3, text: "Pants" },
        { id: 4, text: "Shoes" },
    ];

    const listItems = items.map((item, index) => (
        <div key={index}>{item.text}</div>
    ));
    
    return <ul>{listItems}</ul>;
  }
  