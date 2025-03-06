import React, { useEffect } from 'react';
import './App.css';
import Snippet from './Components/Snippet';
import Counter from './Components/Counter';
import ItemList from './Components/ItemList';


function App() {

	useEffect(() => {
		document.title = "Snippets"
	 }, []);
	
	return (
		<div className="App">
			<Snippet />
			<Counter />
			<ItemList />
		</div>
	);
}

export default App;
