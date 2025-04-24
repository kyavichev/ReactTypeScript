
import React, { useState } from 'react';
import './MapExample.css';


export default function MapExample() {
   
    const items = [
        { id: 1, text: "Hat" },
        { id: 2, text: "Shirt" },
        { id: 3, text: "Pants" },
        { id: 4, text: "Socks" },
        { id: 4, text: "Shoes" },
    ];

    const listItems = items.map((item, index) => (
        <div className="map-example-entry" key={index}>{item.text}</div>
    ));
    
    return (
        <div className="map-example-main"> 
            {listItems}
        </div>
     );
  }
  