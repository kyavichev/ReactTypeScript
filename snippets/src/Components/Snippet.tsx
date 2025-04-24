
import React, { useState } from 'react';
import './Snippet.css';


export default function Snippet() {

	const [value, setValue] = useState<string>("");

	function handleChange(event: any) {
		setValue(event.target.value);
	}
	
	return (
		<div className="snippet-main">
			<input type="text" value={value} onChange={handleChange} />
			<p>You entered: {value}</p>
		</div>
	);
}