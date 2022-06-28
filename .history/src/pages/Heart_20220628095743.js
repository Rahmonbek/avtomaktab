import React, { Suspense } from 'react'
import { Physics } from '@react-three/cannon';
import HeartA from '../ModelCar/HeartA'
export default function Heart() {




    return (
    <Suspense>
        
    <HeartA mass={1} position={[0, 0.5, 0]}/>
</mesh>
      
    </Suspense>
  )
}
