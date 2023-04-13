import { useGLTF, OrbitControls } from '@react-three/drei'
import React from 'react'
export default function Experience() {
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    return (
        <>
            <color args={['#241a1a']} attach="background" />
            <OrbitControls makeDefault />
            <mesh>
                <boxGeometry />
                <meshNormalMaterial />
                <primitive object={computer.scene} />
            </mesh>

        </>
    )
}


