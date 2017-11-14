import React        from 'react';
import { connect }  from 'react-redux';

const SPOT_LETTERS = ['A', 'B', 'C', 'D',
                      'E', 'F', 'G', 'H',
                      'I', 'J', 'K', 'L',
                      'M', 'N', 'O', 'P',
                      'Q', 'R', 'S'];
const LETTERS_PER_ROW = 4;

// from the letters array, generate a 2D array
// with LETTERS_PER_ROW letters on each row
const LETTERS_TABLE = SPOT_LETTERS
  .map((letter, i) => i % LETTERS_PER_ROW === 0 ? SPOT_LETTERS.slice(i, i + LETTERS_PER_ROW) : null)
  .filter(e => e); // filter to remove 'null' elements

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

class SelectOrderId extends React.Component {
  state = {
    selectedLetter: null
  };

  onLetterSelect(selectedLetter) {
    this.setState({selectedLetter});
  }

  render() {

    return (
      <div className="b-select_order_id">
        {
          LETTERS_TABLE.map(row => {
            return <div>
                    {
                      row.map(letter => {
                        return <span
                          className={
                            `b-order_id-select--letter
                            ${letter === this.state.selectedLetter ? ' b-order_id-select--letter--selected' : ''}`}
                          onClick={() => this.onLetterSelect(letter)}>
                          {letter}
                          </span>
                      })
                    }
                  </div>
          })
        }
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SelectOrderId);
