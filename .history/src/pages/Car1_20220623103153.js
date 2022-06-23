import { Physics } from '@react-three/cannon'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'


import Car from '../ModelCar/Car'


export const Car1=()=> {
  const [rotation, setRotation] = useState([0,3.15,0])
  const [position, setPosition] = useState([0, -1, -2])
  
  
 
  return (
    <>
    
    <Canvas camera={{position:[1,1,1], zoom:1.3}}>

      <OrbitControls/>
      {/* <MapControls/> */}
      <Physics>
   <color attach="background" args={["lightblue"]}/>
   <hemisphereLight intensity={0.35}/>

      <ambientLight intensity={0.1}/>
      <pointLight position={[100,100,100]}/>
  
   
    {/* <Road/> */}
    <Suspense fallback={null}>
 
 <Car position={position}  rotation={rotation}/>
 
   </Suspense>
  
      </Physics>
    </Canvas> 

 
    
    </>
  )
}
