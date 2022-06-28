import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, {Suspanse} from 'react'

export default function Dashboard() {
  return (
    <Canvas>
        <Suspanse>
        <OrbitControls ref={OrbitControlsRef} minPolarAngle={(Math.PI/180)*60} maxPolarAngle={(Math.PI/180)*80}/>
        </Suspanse>
    </Canvas>
  )
}
