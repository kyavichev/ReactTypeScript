import React, { useEffect } from 'react';
import './App.css';
import Weather from './Components/Weather';



function App() {

	useEffect(() => {
		document.title = "weather-app"
	 }, []);
	
	return (
		<div className="App">
			<Weather />
		</div>
	);
}

export default App;
