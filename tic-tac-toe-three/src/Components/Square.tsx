
import { useRef } from 'react';
import { DoubleSide, Vector3, Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import { SymbolX } from './SymbolX';
import { SymbolO } from './SymbolO';
import './Square.css'

const COLOR = 'rgb(255, 125, 0)';
const OPACITY = 1;

type SquareProps = {
    label: string | null,
    position: Vector3,
    onClicked: () => void;
}

export function Square({label, position, onClicked} : SquareProps) {

    const myMesh = useRef<Mesh>(null);

    useFrame(({ clock }, delta) => {

        if (!myMesh.current?.rotation) return;
        (myMesh.current.rotation as any).y += -delta;

        // if(myMesh.current) {
        //     let rotation = myMesh.current?.rotation;
        //     rotation.x = clock.elapsedTime;
        //     myMesh.current.rotation = rotation;
        // }
    });

    return (
        <>
            <mesh ref={myMesh} receiveShadow position={position} onClick={onClicked}>
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
            { label == 'X' && <SymbolX position={position} /> }
            { label == 'O' && <SymbolO position={position} /> }
        </>
    );
}
