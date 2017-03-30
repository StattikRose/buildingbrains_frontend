import React, { Component } from 'react';

import Nav from './Nav.js';
import Reg from './Reg.js';
import Device from '../routes/Device/components/Device.js';
import Headers from './Headers.js';
import Notification from './Notification.js';
import Home from './Home.js';
import Login from './Login.js';
import Recovery from './Recovery.js';
import DeviceAdder from './DeviceAdder.js';


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      route: window.location.pathname,//.substr(1)
      isLogin:true 
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  };

  render() {
    let Child
    switch (this.state.route) {
      case '/Device': Child = Device; break;
      case '/DeviceAdder': Child = DeviceAdder; break;
      case '/Devices': Child = Devices; break;
      case '/Reg': Child = Reg; this.state.isLogin=false; break;
      case '/Login': Child = Login; this.state.isLogin=false; break;
      case '/Recovery': Child = Recovery; this.state.isLogin=false; break; 
      default:      Child = Home; this.state.isLogin=true;
    }
    return (
      <div className="App">
        <Headers />
       { this.state.isLogin ? <Nav /> : null }
        <Device />
      </div>
    )
  }
}

export default App;
