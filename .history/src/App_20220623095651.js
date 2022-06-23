import React, { Component } from 'react'
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Parking from './pages/Parking';
export default class App extends Component {
  render() {
    return (
      <div>
        <Parking/>
      </div>
    )
  }
}
