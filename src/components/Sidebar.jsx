import React       from 'react';
import { connect } from 'react-redux';

import { removeItem } from '../actions';

const mapStateToProps = state => {
  return {
    basket: state.basket
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveItemClick(item) {
      dispatch(removeItem(item));
    }
  };
};

class Sell extends React.Component {
  propTypes = {
    basket           : React.PropTypes.array,
    onRemoveItemClick: React.PropTypes.func,
  };

  render() {
    return (
      <div className="b-sell__page__sidebar">
        {this.props.basket.map(item => {
          console.log(item);
          return (
            <div className="b-sell__page__sidebar__item" onClick={ () => this.props.onRemoveItemClick(item) }>
              {item.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sell);
