import React, { Component } from 'react';
import SimplexNoise from 'simplex-noise';
import './App.css';

import Navbar from './../Navbar/Navbar.jsx';
import Display from '../Display/Display.jsx';

class App extends Component {
  state = {
    audioContext: {},
    analyzer: {},
    simplex: new SimplexNoise('I love keyboard cats'),
    series: Array(400).fill(0),
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Display width={200} height={50} series={Array(400).fill(0.5)}/>
      </div>
    );
  }
}

export default App;
