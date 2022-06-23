
import {Canvas} from "@react-three/fiber"

import { Physics } from '@react-three/cannon';
import {MapControls, OrbitControls} from '@react-three/drei'

import {Road} from './Road';
import { Car } from "./Car";


function Parking() {


  return (
    <div className="App">

    <Canvas>

      <OrbitControls/>
      {/* <MapControls/> */}
      <Physics>
   <color attach="background" args={["lightblue"]}/>
   <hemisphereLight intensity={0.35}/>

      <ambientLight intensity={0.1}/>
      <pointLight position={[100,100,100]}/>
  
   
    <Road/>
  <Car/>
  
      </Physics>
    </Canvas> 

    </div>
  );
}

export default Parking;
