import React, { Component } from 'react';
import './Row.css';
import Box from './Box.js';

class Row extends Component {
  
  constructor(props){

    super(props);
    this.state = {id: this.props._id, style: 'Row Off', renderBool:false};
    
  }

  componentWillReceiveProps()
  {
`    if(this.props._count === this.state.id)
    {
        
        this.turnOn();

    }else{

        this.turnOff();

    }
  }

  turnOn()
  {
    //this.state.style = 'Row On';
    this.setState({renderBool: true});
  }

  turnOff()
  {
    //this.state.style = 'Row Off';
    this.setState({renderBool :false});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.renderBool;
  }

  
  render() {
    return (
      <div  className={this.state.style}>
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

export default Row;