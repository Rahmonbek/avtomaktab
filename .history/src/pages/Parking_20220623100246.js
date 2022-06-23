
import {Canvas} from "@react-three/fiber"

import { Physics } from '@react-three/cannon';
import {MapControls, OrbitControls} from '@react-three/drei'

import {Road} from './Road';


function Parking() {


  return (
    <div className="App">

    <Canvas className={{position:'absolute', top:'0px', left:'0px'}} camera={{position:[0,10,1], zoom:1}}>

      {/* <OrbitControls/> */}
      <MapControls/>
      <Physics>
   <color attach="background" args={["lightblue"]}/>
   <hemisphereLight intensity={0.35}/>
<spotLight
position={[10, 10, 10]}
angle={0.3}
penumbra={1}
intensity={2}
castShadow
/>
      <ambientLight intensity={0.1}/>
      <pointLight position={[100,100,100]}/>
  
   
    <Road/>
  
  
      </Physics>
    </Canvas> 

    </div>
  );
}

export default Parking;
