import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  audio = new Audio();
  constructor(props){

    super(props);
    

    //bind handlers
    this.handleClick = this.handleClick.bind(this);
    this.audio.src = require('../audio/808-Kits/' + this.props._folder +'/' + this.props._src + '.wav');
    this.state = {count: 0, style: 'Box Off', toggle: false};
    
  }

  handleClick(){

    if(this.state.toggle){
      this.turnOff();
    }else{
      this.turnOn();
    }

    //toggle the on off state
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
    
  }

  turnOn(){
    
    this.setState({style: 'Box On'});

  }

  turnOff(){
    this.audio.pause();
    this.setState({style: 'Box Off'});
  }
  
  componentDidUpdate()
  {
    if(this.state.toggle){
      this.playSample()
    }
  }

  playSample() {

    this.audio.load();
    this.audio.play();
  }

  render() {
    return (
      <div className={this.state.style} onClick={this.handleClick}>
        *
      </div>
    );
  }
}

export default Box;