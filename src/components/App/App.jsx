import React, { Component } from 'react';
import SimplexNoise from 'simplex-noise';
import './App.css';

import Navbar from './../Navbar/Navbar.jsx';
import Display from '../Display/Display.jsx';

class App extends Component {
  state = {
    audioContext: {},
    analyzer: {},
    simplex: new SimplexNoise(),
    seriesWidth: 300,
    timeCounter: 0,
    series: Array(300).fill(0),
  }

  componentDidMount() {
    this.updateSeries();

    setInterval(this.updateSeries, 20);
  }

  updateSeries = () => {
    const { timeCounter, seriesWidth, simplex } = this.state;

    let series = [];

    for (let i = 0; i < seriesWidth; ++i) {
      series.push((simplex.noise2D(i / 20, timeCounter / 50)) / 2 + 0.5);
    }

    this.setState({
      series: series,
      timeCounter: this.state.timeCounter + 1,
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
