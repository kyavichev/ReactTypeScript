import React, { useEffect } from 'react';
import './App.css';
import Snippet from './Components/Snippet';
import Counter from './Components/Counter';
import ItemList from './Components/ItemList';
import ImageDownload from './Components/ImageDownload';
import MapExample from './Components/MapExample';


function App() {

	useEffect(() => {
		document.title = "Snippets"
	 }, []);
	
	return (
		<div className="App">
			<Snippet />
			<Counter />
			<ItemList />
			<ImageDownload />
			<MapExample />
		</div>
	);
}

export default App;
