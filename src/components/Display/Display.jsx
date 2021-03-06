import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Display.css';

class Display extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    series: PropTypes.arrayOf(PropTypes.number).isRequired,
  };

  /** gets the appropriate braille character for the EQ visualization
   * @param {number} leftHeight The left hight of the braille character
   * @param {number} rightHeight The right hight of the braille character
   * @return {string} the braille character for the respective heights */
  getBrailleCharacter = (leftHeight, rightHeight) => {
    leftHeight = 4 - leftHeight;
    rightHeight = 4 - rightHeight;

    const brailleMap = {
      0: {
        0: '⡀',
        1: '⢀',
        2: '⢠',
        3: '⢰',
        4: '⢸',
      },
      1: {
        0: '⡀',
        1: '⣀',
        2: '⣠',
        3: '⣰',
        4: '⣸',
      },
      2: {
        0: '⡄',
        1: '⣄',
        2: '⣤',
        3: '⣴',
        4: '⣼',
      },
      3: {
        0: '⡆',
        1: '⣆',
        2: '⣦',
        3: '⣶',
        4: '⣾',
      },
      4: {
        0: '⡇',
        1: '⣇',
        2: '⣧',
        3: '⣷',
        4: '⣿',
      }
    };

    return brailleMap[leftHeight][rightHeight];
  }

  renderGraphString = () => {
    const { width, height, series } = this.props;

    const display = Array(width).fill('');

    for (let i = 0; i < width; ++i) {
      for (let j = 0; j < height; ++j) {
        let leftHeight = 0;
        let rightHeight = 0;

        if (j > height * series[2*i]) {
          leftHeight = 0;
        } if (j > height * series[2*i] + (1/4)) {
          leftHeight = 1;
        } if (j > height * series[2*i] + (2/4)) {
          leftHeight = 2;
        } if (j > height * series[2*i] + (3/4)) {
          leftHeight = 3;
        } if (j > height * series[2*i] + 1) {
          leftHeight = 4;
        }

        if (j > height * series[2*i + 1]) {
          rightHeight = 0;
        } if (j > height * series[2*i + 1] + (1/4)) {
          rightHeight = 1;
        } if (j > height * series[2*i + 1] + (2/4)) {
          rightHeight = 2;
        } if (j > height * series[2*i + 1] + (3/4)) {
          rightHeight = 3;
        } if (j > height * series[2*i + 1] + 1) {
          rightHeight = 4;
        }

        display[i] += this.getBrailleCharacter(leftHeight, rightHeight);
      }
    }

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
    const { series } = this.props;

    return (
      <pre className='Display'>
        {this.renderGraphString()}
      </pre>
    )
  }
}

export default Display;