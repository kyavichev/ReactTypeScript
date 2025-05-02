import React, { useRef, useMemo } from 'react';
import { Vector3 } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import { Line2 } from 'three-stdlib';

interface LineProps {
	points: Vector3[];
}

const initialPoints: Vector3[] = [
	new Vector3(-1, 0, 0),
	new Vector3(0, 1, 0),
	new Vector3(1, 0, 0),
  ];
  

export function LineComponent({points}: LineProps) {
	// const lineRef = useRef<THREE.Line>(null);
	// const geometryRef = useRef<THREE.BufferGeometry>(null);

	const lineRef = useRef<Line2>(null);
	//const points = useRef([...initialPoints]);

	// // Use useMemo to create the geometry only when points change
	// const geometry = useMemo(() => {
	// 	const newGeometry = new THREE.BufferGeometry().setFromPoints(points);
	// 	geometryRef.current = newGeometry;
	// 	return newGeometry;
	// }, [points]);

	// useFrame(() => {

	// 	// console.log("here");

	// 	// Update points over time (example: simple sine wave movement)
	// 	const time = performance.now() * 0.001;
	// 	points.current = points.current.map((p, i) => {
	// 		const newY = initialPoints[i].y + Math.sin(time + i * 2) * 0.5 * 100;
	// 		return new Vector3(initialPoints[i].x, newY, initialPoints[i].z);
	// 	});

	// 	console.log(points.current);
	// 	console.log("1");

	// 	// Update the line geometry
	// 	if (lineRef.current) {

	// 		console.log(points.current);

	// 		//for(let i = 0; i < points.current.length; i++) {
	// 			lineRef.current.geometry.setFromPoints(points.current ); //.setPositions([0, 0, 0, 0, 50, -50, 25, 100, -100]);
	// 		//}
	// 		//lineRef.current.geometry.setPositions(points.current.flatMap(p => [p.x, p.y, p.z]));
	// 		lineRef.current.geometry.computeBoundingSphere(); // Important for updates
	// 		lineRef.current.geometry.attributes.position.needsUpdate = true;
	// 	}
	// });


	// const formattedPoints: Vector3[] = useMemo(
	// 	() => points.current.map(p => new Vector3(p.x, p.y, p.z)),
	// 	[points.current]
	// );

	return (
		<>
			<Line
				ref={lineRef}
				points={points}
				color="red"
				lineWidth={5}
				layers={2}
			/>
		</>
	);
};
