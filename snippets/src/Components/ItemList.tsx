
import React, { useState } from 'react';


export default function ItemList() {
   
    const items = [
        { id: 1, text: "Item 1" },
        { id: 2, text: "Item 2" },
    ];

    const listItems = items.map((item, index) => <li key={index}>{item.text}</li>);
    return <ul>{listItems}</ul>;
  }
  