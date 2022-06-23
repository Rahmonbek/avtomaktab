import React, { Suspense, useEffect, useState } from 'react'


import Car from '../ModelCar/Car'


export const Car1=()=> {
  const [rotation, setRotation] = useState([0,3.15,0])
  const [position, setPosition] = useState([0, 0, 3])
  
  
 
  return (
    <>
  <Suspense fallback={null}>
 
<Car position={position}  rotation={rotation}/>

  </Suspense>
    
    </>
  )
}
