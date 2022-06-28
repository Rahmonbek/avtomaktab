import React, { Suspense, useEffect, useRef } from 'react'
import { Physics, useBox } from '@react-three/cannon';
import HeartA from '../ModelCar/HeartA'
import gsap from 'gsap';
export default function Heart(po) {
   
    const [ref1] =useBox(()=>({
        mass:1,
      
      position:[0, 5, 0]
      }))

     
    return (
    <Suspense>
<mesh receiveShadow castShadow
        ref={ref1}>
    <HeartA />
</mesh>
     
    </Suspense>
  )
}
