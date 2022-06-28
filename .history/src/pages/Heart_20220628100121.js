import React, { Suspense } from 'react'
import { Physics, useBox } from '@react-three/cannon';
import HeartA from '../ModelCar/HeartA'
export default function Heart() {

    const [ref1] =useBox(()=>({
        mass:1,
      rotation:[0.4, 0.2, 0.5],
     
      }))


    return (
    <Suspense>
      
<mesh>
    <HeartA mass={1} />
</mesh>
     
    </Suspense>
  )
}
