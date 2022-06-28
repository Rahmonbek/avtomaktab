import React, { Suspense } from 'react'
import { Physics } from '@react-three/cannon';
import Heart from '../ModelCar/Heart'
export default function Heart() {
  return (
    <Suspense>
        <Physics>
<mesh>
    <Heart/>
</mesh>
        </Physics>
    </Suspense>
  )
}
