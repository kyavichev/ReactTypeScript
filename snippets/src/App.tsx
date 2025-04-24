import React, { useEffect } from 'react';
import './App.css';
import Snippet from './Components/Snippet';
import Counter from './Components/Counter';
import ItemList from './Components/ItemList';
import ImageDownload from './Components/ImageDownload';
import MapExample from './Components/MapExample';
import ChartExample from './Components/ChartExample';
import Velocity from './Components/Velocity';
import Footer from './Components/Footer';


function App() {

	useEffect(() => {
		document.title = "Snippets"
	 }, []);
	
	return (
		<div className="App">
			<main>
				<Snippet />
				<Counter />
				<ItemList />
				<ImageDownload />
				<MapExample />
				<ChartExample />
				<Velocity />
			</main>
			<Footer />
		</div>
	);
}

export default App;
