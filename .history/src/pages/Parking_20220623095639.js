import './App.css';
import {Canvas} from "@react-three/fiber"
import Box from './Box';
import { Suspense } from 'react';
import Plane from './Plane';
import { Physics } from '@react-three/cannon';
import {MapControls, OrbitControls} from '@react-three/drei'
import FirstLesson from './FirstLesson';
import SecondLesson from './SecondLesson';
import ThirdLesson from './ThirdLesson';
import FourthLesson from './FourthLesson';
import Data from './Data';
import SixLesson from './SixLesson';
import SevenLesson from './SevenLesson';


function Parking() {


  return (
    <div className="App">
    {/* <Data/> */}
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
  
    {/* <FirstLesson/>
    <SixLesson/> */}
    <SecondLesson/>
    {/* <ThirdLesson/> */}
  
      </Physics>
    </Canvas> 
{/* <FourthLesson/>*/}
{/* <SevenLesson/> */}
    </div>
  );
}

export default Parking;
