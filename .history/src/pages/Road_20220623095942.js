import React, { Suspense, useEffect, useState } from 'react'


import RoadA from '../ModelCar/Road'


export const Road=()=> {
  const [rotation, setRotation] = useState([0,3.15,0])
  const [position, setPosition] = useState([0, 18.2, 0])
  useEffect(()=>{
   

      const keyDownHandler = event => {
        console.log('User pressed: ', event.key);
        if (event.key === 'a') {
          event.preventDefault();
          setRotation([0,rotation[1]+0.03,0])
  
        }
        if (event.key === 'd') {
          event.preventDefault();
          setRotation([0,rotation[1]-0.03,0])
    
        }
        if (event.key === 'w') {
          event.preventDefault();
          setPosition([0,18,position[2]-0.02])
    
        }
        if (event.key === 's') {
          event.preventDefault();
          setPosition([0,18,position[2]+0.02])
    
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
  {/* <Road position={[0,-100,-31]}/> */}
<Car1 position={position} mass={1} rotation={rotation}/>

  </Suspense>
    
    </>
  )
}
