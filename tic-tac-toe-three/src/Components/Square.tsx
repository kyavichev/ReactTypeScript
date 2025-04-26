
import { DoubleSide, Vector3 } from 'three';
import './Square.css'

const COLOR = 'rgb(255, 125, 0)';
const OPACITY = 1;

type SquareProps = {
    label: string | null,
    position: Vector3,
    onClicked: () => void;
}

export function Square({label, position, onClicked} : SquareProps) {
    return (
        <mesh receiveShadow position={position}>
            <planeGeometry args={[16, 16, 4, 4]} />
            <meshStandardMaterial
                color={COLOR}
                side={DoubleSide}
                opacity={OPACITY}
                transparent
                depthWrite={false}
                depthTest={false}
            />
        </mesh>
    );
}