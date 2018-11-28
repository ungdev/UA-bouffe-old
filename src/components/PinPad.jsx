import React        from 'react'

class PinPad extends React.Component {
  propTypes = {
    onChange      : React.PropTypes.func
  };

  onKeySelect(selectedKey) {
    this.props.onChange(selectedKey);
  }

  render() {

    // from the keys array, generate a 2D array
    // with keysPerRow key per row
    const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '', '<-']
    const keyboard = keys
      .map((key, i) => i % 3 === 0 ? keys.slice(i, i + 3) : null)
      .filter(e => e); // filter to remove 'null' values
    return (
      <div className="b-keyboard">
        {
          keyboard.map(row => {
            return <div>
                    {
                      row.map(key => {
                        return <span
                          className={
                            `b-keyboard__key
                            ${key === this.props.selectedKey ? ' b-keyboard__key--selected' : ''}`}
                          onClick={() => this.onKeySelect(key)}>
                          {key}
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

export default PinPad
