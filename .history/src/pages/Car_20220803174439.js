import React, { Suspense, useEffect, useRef, useState } from 'react'
import {  useBox } from '@react-three/cannon';
import Car1 from '../ModelCar/Car1'
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';
import { Physics,RigidBody } from '@react-three/rapier';
export default function Car(props) {
 
  const [position, setPosition] =useState([0,0,0])
  const [rotation, setRotation] =useState([0, 0, 0])
  const controlsRef=useRef(null)
  
//      useEffect(()=>{

  
//        const keyDownHandler = event => {
//          console.log('User pressed: ', event.key);
//          if (event.key === 'a') {
//            event.preventDefault();
       
//            if(Math.floor(rotation[1])===(Math.PI*2)){
//             setRotation([0,0,0])
//            }else{
//             setRotation([0,rotation[1]+(Math.PI/36),0])
//            }
           
   
//          }
         
//          if (event.key === 'd') {
//            event.preventDefault();
//            if(Math.floor(rotation[1])===-(Math.PI*2)){
//             setRotation([0,0,0])
//            }else{
//             setRotation([0,rotation[1]-(Math.PI/36),0])
//            }
           
//          }
//          if (event.key === 'w') {
//            event.preventDefault();
//            if(rotation[1]>=0 && rotation[1]<Math.PI/2){
//             setPosition([position[0]+Math.sin(rotation[1]),0,position[2]+Math.cos(rotation[1])])
//            }
          
//            if(rotation[1]<Math.PI && rotation[1]>=Math.PI/2){
//             setPosition([position[0]+Math.sin(rotation[1]),0,position[2]+Math.cos(rotation[1])])
//            }
//            if(rotation[1]>=Math.PI && rotation[1]<3*Math.PI/2){
//             setPosition([position[0]+Math.sin(rotation[1]),0,position[2]+Math.cos(rotation[1])])
//            }
//            if(rotation[1]>=3*Math.PI/2){
//             setPosition([position[0]+Math.sin(rotation[1]),0,position[2]+Math.cos(rotation[1])])
//            }
// ///
//            if(rotation[1]<=0 && rotation[1]>-Math.PI/2){
//             setPosition([position[0]+Math.sin(rotation[1]),0,position[2]+Math.cos(rotation[1])])
//            }
          
//            if(rotation[1]>-Math.PI && rotation[1]<=-Math.PI/2){
//             setPosition([position[0]+Math.sin(rotation[1]),0,position[2]+Math.cos(rotation[1])])
//            }
//            if(rotation[1]<=-Math.PI && rotation[1]>-3*Math.PI/2){
//             setPosition([position[0]+Math.sin(rotation[1]),0,position[2]+Math.cos(rotation[1])])
//            }
//            if(rotation[1]<=-3*Math.PI/2){
//             setPosition([position[0]+Math.sin(rotation[1]),0,position[2]+Math.cos(rotation[1])])
//            }
          
          
         
//          }
//          if (event.key === 's') {
//            event.preventDefault();
//            if(rotation[1]>=0 && rotation[1]<Math.PI/2){
//             setPosition([position[0]-Math.sin(rotation[1]),0,position[2]-Math.cos(rotation[1])])
//            }
          
//            if(rotation[1]<Math.PI && rotation[1]>=Math.PI/2){
//             setPosition([position[0]-Math.sin(rotation[1]),0,position[2]-Math.cos(rotation[1])])
//            }
//            if(rotation[1]>=Math.PI && rotation[1]<3*Math.PI/2){
//             setPosition([position[0]-Math.sin(rotation[1]),0,position[2]-Math.cos(rotation[1])])
//            }
//            if(rotation[1]>=3*Math.PI/2){
//             setPosition([position[0]-Math.sin(rotation[1]),0,position[2]-Math.cos(rotation[1])])
//            }
// ///
//            if(rotation[1]<=0 && rotation[1]>-Math.PI/2){
//             setPosition([position[0]-Math.sin(rotation[1]),0,position[2]-Math.cos(rotation[1])])
//            }
          
//            if(rotation[1]>-Math.PI && rotation[1]<=-Math.PI/2){
//             setPosition([position[0]-Math.sin(rotation[1]),0,position[2]-Math.cos(rotation[1])])
//            }
//            if(rotation[1]<=-Math.PI && rotation[1]>-3*Math.PI/2){
//             setPosition([position[0]-Math.sin(rotation[1]),0,position[2]-Math.cos(rotation[1])])
//            }
//            if(rotation[1]<=-3*Math.PI/2){
//             setPosition([position[0]-Math.sin(rotation[1]),0,position[2]-Math.cos(rotation[1])])
//            }
          
     
//          }
//    console.log(rotation, position)
  
//        };
   
//        document.addEventListener('keydown', keyDownHandler);
   
//        return () => {
//          document.removeEventListener('keydown', keyDownHandler);
//        };
    
//    })
  

    return (
     
      <color attach="background" args={["black"]}/>
    
      <ambientLight args={["white", 0.25]} />
      <Physics>
      <RigidBody>
<mesh ref={controlsRef} receiveShadow castShadow>
 <Car1 rotation={rotation} position={position}  />
   
</mesh>
     
  </RigidBody>
  </Physics>
  </Suspense>
  )
}
