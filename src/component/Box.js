import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  audio = new Audio();
  constructor(props){

    super(props);
    

    //bind handlers
    this.handleClick = this.handleClick.bind(this);
    this.audio.src = require('../audio/808-Kits/' + this.props._folder +'/' + this.props._src + '.wav');
    this.state = {count: 0, style: 'Box Off', toggle: true};
    
  }

  handleClick(){
    //alert("clicked");
    clearInterval(this.timerID);

    if(this.state.toggle){
      this.playSample();
    }else{
      this.stopSample();
    }
    //toggle the on off state
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));

  }

  playSample(){
    
    this.timerID = setInterval(
      () => this.tick(),
      2000
    );

    this.setState({style: 'Box On'});
    this.audio.load();
    this.audio.play();
  }

  stopSample(){
    //this.audio.pause();
    this.setState({style: 'Box Off'});
  }
  
  //componentDidMount() {
    
  //}

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    var _iter = this.state.count + 1;
    this.setState({
      count: _iter
    });
    this.audio.load();
    this.audio.play();
  }

  render() {
    return (
      <div className={this.state.style} onClick={this.handleClick}>
        {this.state.count}
      </div>
    );
  }
}

export default Box;