import React, { Suspense } from 'react'
import { Physics } from '@react-three/cannon';

export default function Heart() {
  return (
    <Suspense>
        <Physics>
<mesh>
    <shapeGeometry color="red" position={[0, 0, 0]}/>
</mesh>
        </Physics>
    </Suspense>
  )
}
