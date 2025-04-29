

import React from 'react';
import * as THREE from 'three';
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import './Game.css';
import Grid from './Grid';
import { Board } from './Board';


const Game = () => {

	const width =  600;
	const height = 600;

	const status = "in progress";

	return(
		<div className='playarea'>
			<div>{status}</div>
			<Canvas>
				<color args={['hsl(169, 54.80%, 59.20%)']} attach="background" />
				<ambientLight intensity={0.5} />
				<pointLight position={[50, 200, 50]} intensity={0.75} />
				<mesh>
					<boxGeometry args={[1, 1, 1]} />
					<meshStandardMaterial color={'orange'} />
				</mesh>
				<Grid />
				<Board />
				<OrbitControls
					target={[0, 0, 0]}
					maxPolarAngle={3}
					autoRotate
					autoRotateSpeed={3}
				/>
			</Canvas>
		</div>
	);
};


export default Game;
