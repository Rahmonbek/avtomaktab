import React, { Suspense } from 'react'
import { Physics } from '@react-three/cannon';
import HeartA from '../ModelCar/HeartA'
export default function Heart() {
  return (
    <Suspense>
        <Physics>
<mesh>
    <HeartA posi/>
</mesh>
        </Physics>
    </Suspense>
  )
}
