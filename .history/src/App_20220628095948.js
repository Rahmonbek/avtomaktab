import React, { Component } from 'react'
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Dashboard from './pages/Dashboard';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
export default class App extends Component {
  render() {
    return (
      <div className='bod'>
   
       <Canvas>
       <Physics>
       <Dashboard/>
       </Canvas>
       </Physics>
      </div>
    )
  }
}
