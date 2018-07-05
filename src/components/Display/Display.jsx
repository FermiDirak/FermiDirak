import React, { Component } from 'react';
import './Display.css';

class Display extends Component {

  state = {
    width: 150,
    height: 25,
    series: Array(150).fill(0).map(_ => Math.random()),
  }

  renderGraphString = () => {
    const { width, height, series } = this.state;

    const display = series.map(datum => {
      let col = '';
      for (let i = 0; i < height; ++i) {
        if (i <= height * datum) {
          col += '|';
        } else {
          col += ' ';
        }
      }
      return col;
    });

    let strDisplay = ``;

    for (let j = height - 1; j >= 0; --j) {
      for (let i = 0; i < width; ++i) {
        strDisplay += display[i][j];
      }
      strDisplay += '\n';
    }

    return strDisplay;
  }

  render() {
    const { series } = this.state;

    return (
      <pre className='Display'>
        {this.renderGraphString()}
      </pre>
    )
  }
}

export default Display;