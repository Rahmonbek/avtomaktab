import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Physics, useBox } from '@react-three/cannon';
import Car1 from '../ModelCar/Car1'
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';
export default function Car(props) {
 
  const [position, setPosition] =useState([0,0,0])
  const [rotation, setRotation] =useState([0, 0, 0])
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
  
     useEffect(()=>{
  
  
       const keyDownHandler = event => {
         console.log('User pressed: ', event.key);
         if (event.key === 'a') {
           event.preventDefault();
           setRotation([0,rotation[1]+0.2,0])
   
         }
         if (event.key === 'd') {
           event.preventDefault();
           setRotation([0,rotation[1]-0.2,0])
     
         }
         if (event.key === 'w') {
           event.preventDefault();
           setPosition([0,0,position[2]+2])
     
         }
         if (event.key === 's') {
           event.preventDefault();
           setPosition([0,0,position[2]-2])
     
         }
   console.log(rotation, position)
  
       };
   
       document.addEventListener('keydown', keyDownHandler);
   
       return () => {
         document.removeEventListener('keydown', keyDownHandler);
       };
    
   })
  

    return (
   
<mesh receiveShadow castShadow
       >
 <Car1 position={position} rotation={rotation}  />
   
</mesh>
     
  
  )
}
