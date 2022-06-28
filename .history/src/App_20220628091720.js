import React, { Component } from 'react'
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Dashboard from './pages/Dashboard';
export default class App extends Component {
  render() {
    return (
      <div>
       <Canvas>
       <Dashboard/>
       </Canvas>
      </div>
    )
  }
}
