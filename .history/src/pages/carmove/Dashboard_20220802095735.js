import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Car from '../Car'

export default function Dashboard() {
  return (
    <Suspense fallback={null}>
        
    <OrbitControls ref={OrbitControlsRef} minPolarAngle={(Math.PI/180)*60} minZoom={12} maxPolarAngle={(Math.PI/180)*80}/>
    <PerspectiveCamera makeDefault position={[10,10,20]}/>
    <color attach="background" args={["black"]}/>
  
  

<Car/>
{/* <Box/> */}


  
   
    <Environment background>
<mesh>
<sphereGeometry args={[50, 100, 100]}/>
<meshBasicMaterial side={THREE.BackSide} color="#2266cc"/>
</mesh>

</Environment>

    </Suspense>
  )
}
