import React from 'react'

export default function Plane() {
  return (
    <mesh ref={ref}>

    <planeGeometry args={[3, 3 ]}/>
    <meshStandardMaterial color="#1ea3d8" />
    
    </mesh>
  )
}
