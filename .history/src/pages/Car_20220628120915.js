import React, { Suspense, useEffect, useRef } from 'react'
import { Physics, useBox } from '@react-three/cannon';
import Car1 from '../ModelCar/Car1'
import gsap from 'gsap';
export default function Car(props) {
   const [pos, setPos] =useSta
    const [ref1] =useBox(()=>({
        mass:0,
      ...props
      }))

     
    return (
   
<mesh receiveShadow castShadow
        ref={ref1}>
 <Car1 />
   
</mesh>
     
  
  )
}
