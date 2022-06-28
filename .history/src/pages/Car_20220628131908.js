import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Physics, useBox } from '@react-three/cannon';
import Car1 from '../ModelCar/Car1'
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';
export default function Car(props) {
 
  const [position, setPosition] =useState([0,0,0])
  const [rotation, setRotation] =useState([0, 0, 0])
  const controlsRef=useRef(null)
  
     useEffect(()=>{

  
       const keyDownHandler = event => {
         console.log('User pressed: ', event.key);
         if (event.key === 'a') {
           event.preventDefault();
           if(rotation[1]===(2*Math.PI)-)
           setRotation([0,rotation[1]+(Math.PI/18),0])
   
         }
         if (event.key === 'd') {
           event.preventDefault();
           setRotation([0,rotation[1]-(Math.PI/18),0])
     
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
   
<mesh ref={controlsRef} receiveShadow castShadow>
 <Car1 rotation={rotation}  />
   
</mesh>
     
  
  )
}
