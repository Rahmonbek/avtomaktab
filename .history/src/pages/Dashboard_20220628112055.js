import { Physics } from '@react-three/cannon'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import Item from 'antd/lib/list/Item'
import React, {Suspense, useRef} from 'react'
import * as THREE from 'three'
import Box from './Box'
import Heart from './Heart'
import Plane from './Plane'
export default function Dashboard() {
    const OrbitControlsRef=useRef(null)
    useFrame((state)=>{
        const {x,y}=state.mouse
        if(!!OrbitControlsRef.current){
  
          OrbitControlsRef.current.setAzimuthalAngle(x*(-((Math.PI/180)*180)))
          OrbitControlsRef.current.setPolarAngle((y+1)*(((Math.PI/180)*60)))
          OrbitControlsRef.current.update()
         
        }
       
})
const  echoHearts=()=>{
   var item=[]
    for(let i=0; i<=100; i++){
item.push(<Heart position={[Math.random() * (0.2) - 0.1,5,Math.random() * (0.2) - 0.1]}/>)
    }
    return(item)
}
  return (
    
        <Suspense fallback={null}>
        
        <OrbitControls ref={OrbitControlsRef} minPolarAngle={(Math.PI/180)*60} maxPolarAngle={(Math.PI/180)*80}/>
        <PerspectiveCamera makeDefault position={[0,1,5]} z={1}/>
        <color attach="background" args={["black"]}/>
      
        <ambientLight args={["white", 0.25]} />
        <spotLight args={["white", 15, 7, (Math.PI/180)*45, 0.4 ]} position={[-1, 1, 0]} castShadow/>

{echoHearts()}
{/* <Box/> */}


       <Plane/>
       
        <Environment background>
  <mesh>
  <sphereGeometry args={[50, 100, 100]}/>
  <meshBasicMaterial side={THREE.BackSide} color="#2266cc"/>
  </mesh>

</Environment>

        </Suspense>
      
  )
}
