import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Physics, useBox } from '@react-three/cannon';
import Car1 from '../ModelCar/Car1'
import gsap from 'gsap';
export default function Car(props) {
 
    const [ref1] =useBox(()=>({
      mass:0,
    ...props
    }))
console.log(props)
    return (
   
<mesh receiveShadow castShadow
        ref={ref1}>
 <Car1  receiveShadow />
   
</mesh>
     
  
  )
}
