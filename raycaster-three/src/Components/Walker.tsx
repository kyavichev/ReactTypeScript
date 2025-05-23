
import { useRef, useState, useMemo, useEffect } from 'react';
import { DoubleSide, Vector3, Mesh, MathUtils, Raycaster, BoxGeometry, ConeGeometry, Quaternion } from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { LineComponent } from './LineComponent';


const COLOR = 'rgb(255, 125, 0)';
const OPACITY = 1;

const WAY_POINTS = [ new Vector3(10, 0, 10), new Vector3(10, 0, -10), new Vector3(-10, 0, -10), new Vector3(-10, 0, 10)];
const WALK_TIME = 3;

const layer = 1;

type WalkerProps = {
	onObjectDetected: (name: string) => void;
};


export function Walker({onObjectDetected}: WalkerProps) {

	const [raycastPoints, setRaycastPoints] = useState<Vector3[]>([new Vector3(0, 0, 0), new Vector3(0, 30, -100)]);
	const { scene, camera } = useThree()
	const myMesh = useRef<Mesh>(null);
	const waypointIndex = useRef<number>(1);
	const walkTime = useRef<number>(0);

	const raycaster = useRef<Raycaster>(new Raycaster());
	raycaster.current.layers.enable(1);

	const geometry = useMemo(() => {
		const firstGeo = new BoxGeometry(2, 2, 2);
		const secondGeo = new ConeGeometry(1, 2, 10);

		secondGeo.translate(0, 1.8, 0);
		secondGeo.rotateX(90 * 3.14 / 180.0);

		return mergeGeometries([firstGeo, secondGeo]);
	}, []);

	
	useEffect(() => {
		camera.layers.enableAll();
	});

	useFrame(({ clock }, delta) => {

		if (!myMesh.current) return;
		if (!myMesh.current?.position) return;

		walkTime.current += delta;
		if(walkTime.current > WALK_TIME)
		{
			walkTime.current = 0;

			waypointIndex.current++;
			waypointIndex.current %= WAY_POINTS.length;
		}

		let prevWaypoint = waypointIndex.current - 1;
		if(prevWaypoint < 0)
		{
			prevWaypoint += WAY_POINTS.length;
		}

		const p = walkTime.current / WALK_TIME;
		myMesh.current.position.lerpVectors( WAY_POINTS[prevWaypoint], WAY_POINTS[waypointIndex.current], p );
		myMesh.current.lookAt(WAY_POINTS[waypointIndex.current]);

		if (raycaster.current) {

			let originPos = myMesh.current.localToWorld(new Vector3(0, 0, 3.1));
			let dir = new Vector3();
			myMesh.current.getWorldDirection(dir);
			raycaster.current.set(originPos, dir);
			const intersects = raycaster.current.intersectObjects(scene.children);
			if(intersects.length > 0) {
				//console.log(intersects);
				onObjectDetected(intersects[0].object.name);

				const newPoints = [originPos, intersects[0].point];
				setRaycastPoints(newPoints);
			}
		}

	});


	return (
		<>
			<mesh ref={myMesh} receiveShadow position={[0, 0, 0]} scale={[2, 2, 2]} geometry={geometry} layers={[2]}>
				<meshStandardMaterial
					color={COLOR}
					side={DoubleSide}
					opacity={OPACITY}
					transparent
					depthWrite={false}
					depthTest={false}
				/>
			</mesh>
			<LineComponent points={raycastPoints} />
		</>
	);
}
