
import {Canvas} from "@react-three/fiber"

import { Physics } from '@react-three/cannon';
import {MapControls, OrbitControls} from '@react-three/drei'

import {Road} from './Road';
import { Car } from "./Car";
import { Suspense, useEffect } from "react";
import { Car1 } from "./Car1";
import Box from "./Box";


function Parking() {


  return (
    <div className="App">

    <Canvas camera={{position:[1,1,1], zoom:1.3}}>

      <OrbitControls/>
      {/* <MapControls/> */}
      <Physics>
   <color attach="background" args={["lightblue"]}/>
   <hemisphereLight intensity={0.35}/>

      <ambientLight intensity={0.1}/>
      <pointLight position={[100,100,100]}/>
  
   
    {/* <Road/> */}
<Suspense>
  <Car/>

  <Box position={[0, 0, 0]}/>
  
      </Physics>
      <Car1/>
 
    </Canvas> 

    </div>
  );
}

export default Parking;
