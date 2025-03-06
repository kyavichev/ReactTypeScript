import React, { useEffect } from 'react';
import './App.css';
import Counter from './Components/Counter';


function About() {

	useEffect(() => {
		document.title = "Snippets: About"
	 }, []);
	
	return (
		<div className="App">
            <p>About Page</p>
			<Counter />
		</div>
	);
}

export default About;
