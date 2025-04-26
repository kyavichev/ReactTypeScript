

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

	//const { camera } = useThree();

	// const scene = new THREE.Scene();
	// const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
	// const renderer = new THREE.WebGLRenderer();
	// renderer.setSize(width, height);
	// document.body.appendChild(renderer.domElement);

	// const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
	// scene.add(light);

	// const geometry = new THREE.BoxGeometry();
	// const material = new THREE.MeshLambertMaterial({color: 0x00FF00});
	// const cube = new THREE.Mesh(geometry, material);
	// scene.add(cube);

	// camera.position.z = 5;

	// const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);

	// const animate = function() {
	// 	requestAnimationFrame(animate);

	// 	cube.rotation.x += 0.01;
	// 	cube.rotation.y += 0.01;

	// 	renderer.render(scene, camera);
	// }

	// animate();

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
