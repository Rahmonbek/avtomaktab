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
 ...props
}))

  
   for(let i=0; i<=30; i++)
    return (
 
        <mesh receiveShadow castShadow
         ref={ref1}
         scale={[0.05,0.05,0.05]}
         onClick={()=>{setPo(po*-1)}}>
        <boxBufferGeometry/>

        <meshStandardMaterial color="gold"/>
       
      </mesh>
      
 
  )
}
