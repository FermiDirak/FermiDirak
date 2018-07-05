import React, { Component } from 'react';
import './App.css';

import Navbar from './../Navbar/Navbar.jsx';
import Display from '../Display/Display.jsx';

class App extends Component {
  state = {
    audioContext: {},
    analyzer: {},
  }

  componentDidMount() {
    this.audioContext = new AudioContext();
    this.analyzer = this.audioContext.createAnalyser();

    navigator.getUserMedia(
      // constraints
      { audio: true },

      //success callback
      (stream) => {
        let source = this.audioContext.createMediaStreamSource(stream);
        source.connect(this.analyzer);
        this.analyzer.connect(this.audioContext.destination);

        this.visualize(stream);
      },

      //error callback
      (error) => {
        console.error(error);
      },
    );
  }

  visualize = (stream) => {
    console.log(stream);

    console.log(stream);
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
