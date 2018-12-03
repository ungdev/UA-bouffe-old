import React        from 'react';
import { connect }  from 'react-redux';

class Keyboard extends React.Component {
  propTypes = {
    keys          : React.PropTypes.array,
    keysPerRow    : React.PropTypes.number,
    onChange      : React.PropTypes.func
  };

  onKeySelect(selectedKey) {
    if (selectedKey === this.props.selectedKey) {
      selectedKey = null;
    }
    this.props.onChange(selectedKey);
  }

  render() {

    // from the keys array, generate a 2D array
    // with keysPerRow key per row
    const keyboard = this.props.keys
      .map((key, i) => i % this.props.keysPerRow === 0 ? this.props.keys.slice(i, i + this.props.keysPerRow) : null)
      .filter(e => e); // filter to remove 'null' values

    return (
      <div className="b-keyboard">
        {
          keyboard.map(row => {
            return <div>
                    {
                      row.map(key => {
                        if (key.length === 1) {
                          return <span
                            className={
                              `b-keyboard__key
                              ${key === this.props.selectedKey ? ' b-keyboard__key--selected' : ''}`}
                            onClick={() => this.onKeySelect(key)}>
                            {key}
                            </span>
                        } else {
                          return <span
                            className={
                              `b-keyboard__key2
                              ${key === this.props.selectedKey ? ' b-keyboard__key--selected' : ''}`}
                            onClick={() => this.onKeySelect(key)}>
                            {key}
                            </span>
                        }
                      })
                    }
                  </div>
          })
        }
      </div>
    );
  }

}

export default connect(null, null)(Keyboard);
