import React, { Suspense } from 'react'
import { Physics } from '@react-three/cannon';
import HeartA from '../ModelCar/HeartA'
export default function Heart() {
  return (
    <Suspense>
        <Physics>
<mesh>
    <HeartA position={[0, 0.5, 0]}/>
</mesh>
        </Physics>
    </Suspense>
  )
}
