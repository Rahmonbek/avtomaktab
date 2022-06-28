import React, { Suspense } from 'react'
import { Physics, useBox } from '@react-three/cannon';
import HeartA from '../ModelCar/HeartA'
export default function Heart() {
    const ballRef=useRef(null)
    const [ref1] =useBox(()=>({
        mass:1,
      
      position:[0, 5, 0]
      }))


    return (
    <Suspense>
<mesh mass={1} position={[0, 5, 0]} receiveShadow castShadow
         ref={ref1}>
    <HeartA />
</mesh>
     
    </Suspense>
  )
}
