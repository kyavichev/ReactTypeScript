import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageApp from './Components/ImageApp';
import AlbumOwner from './vendor/AlbumOwner';

function App() {
	return (
		<div className="m-4">
			<header className="mb-2">
				<AlbumOwner />
			</header>
			<ImageApp />
		</div>
	);
}

export default App;
