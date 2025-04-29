
import { DoubleSide, Vector3 } from 'three';
import './Square.css'


const COLOR = 'rgb(255, 125, 0)';
const OPACITY = 1;


type SymbolXProps = {
    position: Vector3,
}


export function SymbolX({position}: SymbolXProps) {
	return (
		<mesh receiveShadow position={position} scale={[1, 1, 1]} >
			<torusGeometry args={[10, 3, 16, 10]} />
			<meshStandardMaterial
				color={COLOR}
				side={DoubleSide}
				opacity={OPACITY}
				emissive={COLOR}
				emissiveIntensity={1}
				transparent
				depthWrite={false}
				depthTest={false}
			/>
		</mesh>
	);
}