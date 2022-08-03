import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Car from '../Car'

export default function Dashboard() {
  return (
    <Suspense fallback={null}>
        <Canvas shadows>
<Car/>
        </Canvas>
    </Suspense>
  )
}
