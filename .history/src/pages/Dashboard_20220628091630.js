import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, {Suspanse, useRef} from 'react'

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
    <Canvas>
        <Suspanse>
        <OrbitControls ref={OrbitControlsRef} minPolarAngle={(Math.PI/180)*60} maxPolarAngle={(Math.PI/180)*80}/>
        <PerspectiveCamera makeDefault position={[0,1,5]}/>
        <color attach="background" args={["black"]}/>
        </Suspanse>
    </Canvas>
  )
}
