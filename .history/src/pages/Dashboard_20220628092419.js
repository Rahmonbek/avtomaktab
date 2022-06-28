import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, {Suspense, useRef} from 'react'
import * as THREE from 'three'
export default function Dashboard() {
    const OrbitControlsRef=useRef(null)
    useFrame((state)=>{
        const {x,y}=state.mouse
        if(!!OrbitControlsRef.current){
        //   OrbitControlsRef.current.setAzimuthalAngle(-((Math.PI/180)*x*24))
          OrbitControlsRef.current.setAzimuthalAngle(x*(-((Math.PI/180)*180)))
          OrbitControlsRef.current.setPolarAngle((y+1)*(((Math.PI/180)*60)))
          OrbitControlsRef.current.update()
         
        }
        // setPos([x, y, 0])
})
  return (
    
        <Suspense fallback={null}>
        <OrbitControls ref={OrbitControlsRef} minPolarAngle={(Math.PI/180)*60} maxPolarAngle={(Math.PI/180)*80}/>
        <PerspectiveCamera makeDefault position={[0,1,5]}/>
        <color attach="background" args={["black"]}/>

        <ambientLight args={["white", 0.25]} />
        <spotLight args={["white", 1.5, 7, (Math.PI/180)*45, 0.4 ]} position={[-1, 1, 0]} castShadow/>
       
        <mesh receiveShadow rotation={[-((Math.PI/180)*90), 0, 0]}>

<planeGeometry args={[1000, 1000 ]}/>
<meshBasicMaterial color="#81ddaf" />

</mesh>
       
        <Environment background>

  <mesh>
  <sphereGeometry args={[50, 100, 100]}/>
  <meshBasicMaterial side={THREE.BackSide} color="#04eb96"/>
  </mesh>
</Environment>
        </Suspense>
    
  )
}
