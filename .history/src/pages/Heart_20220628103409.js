import React, { Suspense, useEffect, useRef } from 'react'
import { Physics, useBox } from '@react-three/cannon';
import HeartA from '../ModelCar/HeartA'
import gsap from 'gsap';
export default function Heart(props) {
   
    const [ref1] =useBox(()=>({
        mass:1,
      ...props
      }))

     
    return (
   
<mesh receiveShadow castShadow
        ref={ref1}>
    {/* <HeartA /> */}
    <boxGeometry/>
    <meshStandardMaterial color="red"/>
</mesh>
     
    </Suspense>
  )
}
