
import { DoubleSide } from 'three';

const COLOR = 'rgb(186, 221, 255)';
const SIZE = 3; // 24;
const OPACITY = 0.55;
const DISTANCE = 30;
const SCALE = 5;

export function Scene() {
	return (
		<>
			<mesh receiveShadow position={[-DISTANCE, 0, -10]} rotation={[0, Math.PI / 2, 0]} scale={[SCALE, SCALE, SCALE]} layers={[1]}>
				<boxGeometry />
				<meshStandardMaterial
					color={COLOR}
					side={DoubleSide}
					opacity={OPACITY}
					transparent
					depthWrite={false}
					depthTest={false}
				/>
			</mesh>

			<mesh receiveShadow position={[DISTANCE, 0, 10]} rotation={[0, Math.PI / 2, 0]} scale={[SCALE, SCALE, SCALE]} layers={[1]}>
				<boxGeometry />
				<meshStandardMaterial
					color={COLOR}
					side={DoubleSide}
					opacity={OPACITY}
					transparent
					depthWrite={false}
					depthTest={false}
				/>
			</mesh>

			<mesh receiveShadow position={[-10, 0, DISTANCE]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[SCALE, SCALE, SCALE]} layers={[1]}>
				<boxGeometry />
				<meshStandardMaterial
					color={COLOR}
					side={DoubleSide}
					opacity={OPACITY}
					transparent
					depthWrite={false}
					depthTest={false}
				/>
			</mesh>

			<mesh receiveShadow position={[10, 0, -DISTANCE]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[SCALE, SCALE, SCALE]} layers={[1]}>
				<boxGeometry />
				<meshStandardMaterial
					color={COLOR}
					side={DoubleSide}
					opacity={OPACITY}
					transparent
					depthWrite={false}
					depthTest={false}
				/>
			</mesh>	
		</>
	);
}
