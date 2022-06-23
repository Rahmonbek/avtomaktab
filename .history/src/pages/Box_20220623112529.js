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
 ...props
}))

  var item=[]
   for(let i=0; i<=30; i++){
    console.log([ Math.floor(Math.random()*(4)-2), 0.05, Math.floor(Math.random()*(3)-1)])
item.push(<mesh receiveShadow castShadow
    ref={ref1}
    position={[ Math.floor(Math.random()*(4)-2), 0.05, Math.floor(Math.random()*(3)-1)]}
    scale={[0.05,0.05,0.05]}
    onClick={()=>{setPo(po*-1)}}>
   <boxBufferGeometry/>

   <meshStandardMaterial color="gold"/>
  
 </mesh>)
   }
    return (item)
}
