import { usePlane } from '@react-three/cannon'
import React from 'react'

export default function Plane() {
    const [ ref ]=usePlane(()=>({
        rotation:[-Math.PI/2, 0, 0],
        position:[0,0,0]
    }))
    return (
    <mesh receiveShadow ref={ref}>

    <planeGeometry args={[1000, 1000 ]}/>
    <meshStandardMaterial color="#1ea3d8" />
    
    </mesh>
  )
}
