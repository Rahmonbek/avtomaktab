import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

export default function Dashboard() {
  return (
    <Suspense fallback>
        <Canvas>

        </Canvas>
    </Suspense>
  )
}
