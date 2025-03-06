import React, { useEffect } from 'react';
import logo from './logo.svg';
import ThreeView from './Components/ThreeView';
import './App.css';

function App() {

	useEffect(() => {
		document.title = "three js app"
	}, []);

	return (
		<>
			<ThreeView />
		</>
	);
}

export default App;
