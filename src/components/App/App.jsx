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
    series: Array(300).fill(0),
  }

  componentDidMount() {
    setInterval(this.updateSeries, 500);
  }

  updateSeries = () => {
    this.setState({
      series: Array(400).fill(0).map(_ => Math.random()),
    });
  }

  render() {
    const { series } = this.state;

    return (
      <div className="App">
        <Navbar />
        <Display width={150} height={50} series={series}/>
      </div>
    );
  }
}

export default App;
