
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';


function Box() {

	const ref = useRef<Mesh>(null);

	useFrame(() => (ref.current!.rotation.x += 0.01))

	return (

		<mesh ref={ref}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={'orange'} />
		</mesh>
	)
}