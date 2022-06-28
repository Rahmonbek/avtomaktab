import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Physics, useBox } from '@react-three/cannon';
import Car1 from '../ModelCar/Car1'
import gsap from 'gsap';
export default function Car(props) {
 
  const [position, setPosition] =useState([0,0,0])
  const [rotation, setRotation] =useState([0, 0, 0])
  
  
     useEffect(()=>{
  
  
       const keyDownHandler = event => {
         console.log('User pressed: ', event.key);
         if (event.key === 'a') {
           event.preventDefault();
           setRotation([0,rotation[1]+1,0])
   
         }
         if (event.key === 'd') {
           event.preventDefault();
           setRotation([0,rotation[1]-3,0])
     
         }
         if (event.key === 'w') {
           event.preventDefault();
           setPosition([0,18,position[2]-2])
     
         }
         if (event.key === 's') {
           event.preventDefault();
           setPosition([0,18,position[2]+2])
     
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
