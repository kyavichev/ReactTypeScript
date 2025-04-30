
import { useMemo } from 'react';
import { DoubleSide, Vector3, BoxGeometry } from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import './Square.css'


const COLOR = 'rgb(255, 125, 0)';
const OPACITY = 1;
const SCALE = 2.5;


type SymbolXProps = {
    position: Vector3,
}


export function SymbolX({position}: SymbolXProps) {

	const geometry = useMemo(() => {
        const firstGeo = new BoxGeometry(1, 5, 1);
        const secondGeo = new BoxGeometry(1, 5, 1);

        firstGeo.rotateZ(40);
        secondGeo.rotateZ(-40);

        return mergeGeometries([firstGeo, secondGeo]);
    }, []);

	return (
		<mesh receiveShadow position={position} scale={[SCALE, SCALE, SCALE]} geometry={geometry} >
			<meshStandardMaterial
				color={COLOR}
				side={DoubleSide}
				opacity={OPACITY}
				emissive={COLOR}
				emissiveIntensity={0.25}
				transparent
				depthWrite={false}
				depthTest={false}
			/>
		</mesh>
	);
}