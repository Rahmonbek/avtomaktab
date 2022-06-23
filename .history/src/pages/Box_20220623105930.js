import React, { useRef, useState } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { useBox } from '@react-three/cannon'
import { Html } from '@react-three/drei'

export default function Box(props) {
const [po, setPo]=useState(1)

  const box=useRef()
const [ref1] =useBox(()=>({
  mass:0,
rotation:[0.4, 0.2, 0.5],

 ...props
}))

  
   
    return (
 
        <mesh receiveShadow castShadow
         ref={ref1}
         scale={[0.05,0.05,0.05]}
         onClick={()=>{setPo(po*-1)}}>
        <boxBufferGeometry/>

        <meshStandardMaterial color="white"/>
       
      </mesh>
      
 
  )
}
