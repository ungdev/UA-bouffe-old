import React        from 'react';
import { connect }  from 'react-redux';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

class Keyboard extends React.Component {
  propTypes = {
    keys          : React.PropTypes.array,
    keysPerRow    : React.PropTypes.number
  };

  state = {
    selectedKey: null
  };

  onKeySelect(selectedKey) {
    this.setState({selectedKey});
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
                        return <span
                          className={
                            `b-keyboard__key
                            ${key === this.state.selectedKey ? ' b-keyboard__key--selected' : ''}`}
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

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);
