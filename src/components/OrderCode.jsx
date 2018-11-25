import React        from 'react';
import { connect }  from 'react-redux';

import Keyboard from './Keyboard';

const LETTERS_PER_ROW = 6;
const SPOT_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F',
                      'G', 'H', 'I', 'J', 'K', 'L',
                      'M', 'N', 'O', 'P', 'Q', 'R',
                      'S', 'T', 'U', 'V', 'W', 'X'];

const NUMBERS_PER_ROW = 8;
const SPOT_NUMBERS = [ 1,  2,  3,  4,  5,  6,  7,  8,
                       9, 10, 11, 12, 13, 14, 15, 16,
                      17, 18, 19, 20, 21, 22, 23, 24,
                      25, 26, 27, 28, 29, 30, 31, 32];


class OrderCode extends React.Component {
  propTypes = {
    onNumberChange    : React.PropTypes.func,
    onLetterChange    : React.PropTypes.func
  };

  render() {
    return (
      <div className="b-select_order_code">
        Si <b>joueur</b>, selectionner sa place :
        <div className="b-order_code__keyboards">
          <Keyboard
            selectedKey={this.props.letter}
            onChange={this.props.onLetterChange}
            keys={SPOT_LETTERS}
            keysPerRow={LETTERS_PER_ROW}></Keyboard>
          <Keyboard
            selectedKey={this.props.number}
            onChange={this.props.onNumberChange}
            keys={SPOT_NUMBERS}
            keysPerRow={NUMBERS_PER_ROW}></Keyboard>
        </div>
      </div>
    );
  }

}

export default connect(null, null)(OrderCode)
