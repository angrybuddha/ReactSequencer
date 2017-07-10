import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Box from './component/Box.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount(){

  }
  tick(){
    
  }
  render() {
    return (
      <div>
        <Box _folder = 'Chh' _src = 'CHH-0001' />
        <Box _folder = 'Kick' _src = 'kick-0006' />
        <Box _folder = 'Clap' _src = 'clap-0002' />
        <Box _folder = 'Ohh' _src = 'OHH-0001' />
        <Box _folder = 'Perc' _src = 'perc-0001' />
        <Box _folder = 'Rim' _src = 'RIM-0001' />
        <Box _folder = 'Snare' _src = 'snare-0002' />
      </div>
      
    );
  }
}

export default App;
