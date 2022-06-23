import React, { Suspense, useEffect, useState } from 'react'


import RoadA from '../ModelCar/RoadA'


export const Road=()=> {
 
  
 
  return (
    <>
  <Suspense fallback={null}>
  <Road position={[0,-100,-31]}/>


  </Suspense>
    
    </>
  )
}
