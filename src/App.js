import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Row from './component/Row.js';

//import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';

// in your test:
const renderer = new ShallowRenderer();
renderer.render(<App />);
const result = renderer.getRenderOutput();

expect(result.type).toBe('div');
expect(result.props.children).toEqual([
  <span className="heading">Title</span>,
]);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  //start the sequencer 
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      500
    );
  }
  //clear interval when unload sequencer
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick(){
    
    var _iter = this.state.count + 1;

    if(_iter > 7){
      _iter = 0;
    }

    this.setState({
      count: _iter
    });

  }
  render() {
    return (
      <div>
        <div id="Highlight" style={{top: (this.state.count)*120 - 120}}></div>
        <div>
        <Row _id = '0' _count = {this.state.count} />
        <Row _id = '1' _count = {this.state.count} />
        <Row _id = '2' _count = {this.state.count} />
        <Row _id = '3' _count = {this.state.count} />
        <Row _id = '4' _count = {this.state.count} />
        <Row _id = '5' _count = {this.state.count} />
        <Row _id = '6' _count = {this.state.count} />
        <Row _id = '7' _count = {this.state.count} />
        </div>
      </div>
    );
  }
}

export default App;
