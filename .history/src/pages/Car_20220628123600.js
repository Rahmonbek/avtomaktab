import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Physics, useBox } from '@react-three/cannon';
import Car1 from '../ModelCar/Car1'
import gsap from 'gsap';
export default function Car(props) {
 
    const [ref1] =useBox(()=>({
      mass:0,
    ...props
    }))

    return (
   
<mesh receiveShadow castShadow
       >
 <Car1  receiveShadow />
   
</mesh>
     
  
  )
}
