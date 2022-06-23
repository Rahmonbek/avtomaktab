import React, { useRef, useState } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { useBox } from '@react-three/cannon'
import { Html } from '@react-three/drei'

export default function Box(props) {
const [po, setPo]=useState(1)

  const box=useRef()
const [ref1] =useBox(()=>({
  mass:1,
rotation:[0.4, 0.2, 0.5],
 ...props
}))

    const [wood, floor]=useLoader(TextureLoader,["wood.png", "floor.png"])
   
    return (
 
        <mesh receiveShadow castShadow
         ref={ref1}
         onClick={()=>{setPo(po*-1)}}>
        <boxBufferGeometry/>

        <meshStandardMaterial map={po===1?wood:floor}/>
        <Html className='salom'>Salom three</Html>
      </mesh>
      
 
  )
}
