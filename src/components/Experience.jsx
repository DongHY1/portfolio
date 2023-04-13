import { OrbitControls } from '@react-three/drei'
import React from 'react'

export default function Experience() {
    return (
        <>
            <OrbitControls makeDefault />
            <mesh>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </>
    )
}
