import { usePlane } from '@react-three/cannon'
import React from 'react'

export default function Plane() {
    const [ ref ]=usePlane(()=>({
      
        position:[0,0,0]
    }))
    return (
    <mesh receiveShadow ref={ref}>

    <planeGeometry args={[3, 3 ]}/>
    <meshStandardMaterial color="#1ea3d8" />
    
    </mesh>
  )
}
