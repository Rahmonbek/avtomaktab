import React, { Suspense, useEffect, useState } from 'react'


import Car1 from '../ModelCar/Car1'


export const Car=()=> {
  const [rotation, setRotation] = useState([0,3.15,0])
  const [position, setPosition] = useState([0, 0, 0])
  useEffect(()=>{
   

      const keyDownHandler = event => {
        console.log('User pressed: ', event.key);
        if (event.key === 'a') {
          event.preventDefault();
       
          setRotation([0,rotation[1]+0.02,0])
  
        }
        if (event.key === 'd') {
          event.preventDefault();
          if(rotation<-3.15)
          setRotation([0,rotation[1]-0.02,0])
    
        }
        if (event.key === 'w') {
          event.preventDefault();
          setPosition([0,0,position[2]-0.02])
    
        }
        if (event.key === 's') {
          event.preventDefault();
          setPosition([0,0,position[2]+0.02])
    
        }
  console.log(rotation, position)

      };
  
      document.addEventListener('keydown', keyDownHandler);
  
      return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
   
  })
  
 
  return (
    <>
  <Suspense fallback={null}>
 
<Car1 position={position}  rotation={rotation}/>

  </Suspense>
    
    </>
  )
}
