

import React from 'react';
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Model } from './Model';
import { Box } from './Box';


export default function ThreeView() {
    return (
        <div style={{ width: '800px', height: '500px' }}>
            <Canvas shadows camera={{ position: [0, 0, 1.66] }} >
                <Environment files="./img/forest_slope_1k.hdr" />
                <Model />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
                <ContactShadows position={[0, -0.8, 0]} color="#ffffff" />
                <OrbitControls autoRotate />
            </Canvas>
        </div>
      )
}
