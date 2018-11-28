import React        from 'react';
import { connect }  from 'react-redux';

import Keyboard from './Keyboard'
import PinPad from './PinPad'

const LETTERS_PER_ROW = 6;
const SPOT_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F',
                      'G', 'H', 'I', 'J', 'K', 'L',
                      'M', 'N', 'O', 'P', 'Q', 'R',
                      'S', 'T', 'U', 'V', 'W', 'X']

class OrderCode extends React.Component {
  propTypes = {
    onNumberChange    : React.PropTypes.func,
    onLetterChange    : React.PropTypes.func
  };

  render() {
    let code = ''
    code += this.props.letter ? this.props.letter : ''
    code += this.props.number ? this.props.number : ''
    return (
      <div className="b-select_order_code">
        Si <b>joueur</b>, selectionner sa place :
        <div className="b-order_code__keyboards">
          <Keyboard
            selectedKey={this.props.letter}
            onChange={this.props.onLetterChange}
            keys={SPOT_LETTERS}
            keysPerRow={LETTERS_PER_ROW}
          />
          <div className="b-order_code__result">
            <span>code :</span>
            <span>{code !== '' && '#'}{code}</span>
          </div>
          <PinPad
            onChange={this.props.onNumberChange}
          />
        </div>
      </div>
    );
  }

}

export default connect(null, null)(OrderCode)
