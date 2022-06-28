import React, { Suspense, useEffect, useRef } from 'react'
import { Physics, useBox } from '@react-three/cannon';
import HeartA from '../ModelCar/HeartA'
import gsap from 'gsap';
export default function Box() {
    const ballRef=useRef(null)
    const [ref1] =useBox(()=>({
        mass:1,
      
      position:[0, 5, 0]
      }))

      useEffect(()=>{


        if(!!ballRef.current){
          const timeLine=gsap.timeline()
          console.log(ballRef.current)
          
          
         
           timeLine.to(ballRef.current.position,{
            y:0.1,
            duration:1.75,
          ease:"bounce.out",
          
           },">"
            // , ">+=1"
            )
      
      // gsap.from(ballRef.current.position,{
      //   y:0.5,
      //   duration:2.5,
      // ease:"bounce.out",
      
      //  })
      
      
      
        }  
      
      
      
        
      }, [ballRef.current])
      
    return (
    <Suspense>
<mesh receiveShadow castShadow
        ref={ref1}>
    <HeartA />
</mesh>
     
    </Suspense>
  )
}
