import { PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'
import React from 'react'
export default function Experience() {
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    return (
        <>
            <color args={['#241a1a']} attach="background" />

            <Environment preset="city" />
            <mesh>
                <PresentationControls global>
                    <Float rotationIntensity={0.4}>
                        <primitive object={computer.scene} position-y={-1.2} />
                    </Float>
                </PresentationControls>
            </mesh>
        </>
    )
}


