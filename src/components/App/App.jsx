import React, { Component } from 'react';
import './App.css';

import Navbar from './../Navbar/Navbar.jsx';
import Display from '../Display/Display.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Display />
      </div>
    );
  }
}

export default App;
