import React from 'react'

export default function Plane() {
  return (
    <mesh receiveShadow rotation={[-((Math.PI/180)*90), 0, 0]}>

    <planeGeometry args={[3, 3 ]}/>
    <meshStandardMaterial color="#1ea3d8" />
    
    </mesh>
  )
}
