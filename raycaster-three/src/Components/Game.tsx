

import { useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import './Game.css';
import { Scene } from './Scene';
import { Walker } from './Walker';


function Game() {

	// const {camera} = useThree();

	// useEffect(() => {
	// 	camera.layers.enableAll();
	// });

	const [detectedObjectName, setDetectedObjectName] = useState<string>(".");

	function onObjectDetected(objectName: string) {
		setDetectedObjectName(objectName);
	}

	return(
		<div className='playarea'>
			<div className='message'>{detectedObjectName}</div>
			<Canvas camera={{position: [0, 30, 50]}}>
				<color args={['hsl(169, 54.80%, 59.20%)']} attach="background" />
				<ambientLight intensity={0.5} />
				<pointLight position={[50, 200, 50]} intensity={0.75} />
				<axesHelper scale={[100, 100, 100]} layers={[2]} />
				<Scene />
				<Walker onObjectDetected={onObjectDetected} />
				<OrbitControls
					target={[0, 0, 0]}
					maxPolarAngle={3}
				/>
			</Canvas>
		</div>
	);
};


export default Game;
