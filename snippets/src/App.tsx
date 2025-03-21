import React, { useEffect } from 'react';
import './App.css';
import Snippet from './Components/Snippet';
import Counter from './Components/Counter';
import ItemList from './Components/ItemList';
import ImageDownload from './Components/ImageDownload';


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
		</div>
	);
}

export default App;
