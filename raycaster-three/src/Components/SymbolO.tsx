
import { DoubleSide, Vector3 } from 'three';
import './Square.css'


const COLOR = 'rgb(6, 255, 18)';
const OPACITY = 1;
const SCALE = 0.45;


type SymbolOProps = {
    position: Vector3,
}


export function SymbolO({position}: SymbolOProps) {
	return (
		<mesh receiveShadow position={position} scale={[SCALE, SCALE, SCALE]} >
			<torusGeometry args={[10, 3, 16, 10]} />
			<meshStandardMaterial
				color={COLOR}
				side={DoubleSide}
				opacity={OPACITY}
				emissive={COLOR}
				emissiveIntensity={0.25}
				transparent
				depthWrite={true}
				depthTest={true}
			/>
		</mesh>
	);
}
