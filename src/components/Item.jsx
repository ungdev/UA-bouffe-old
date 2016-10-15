import React       from 'react';
import { connect } from 'react-redux';

import { addItem } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    onAddItemClick(item) {
      dispatch(addItem(item));
    }
  }
};

class Sell extends React.Component {
  propTypes = {
    id            : React.PropTypes.string,
    name          : React.PropTypes.string,
    price         : React.PropTypes.number,
    onAddItemClick: React.PropTypes.func
  };

  render() {
    return (
      <div className="b-item" onClick={() => this.addItem()}>
        {this.props.name}
      </div>
    );
  }

  addItem() {
    this.props.onAddItemClick({
      id        : this.props.id,
      name      : this.props.name,
      price     : this.props.price,
      lowerPrice: this.props.lowerPrice
    });
  }
}

export default connect(null, mapDispatchToProps)(Sell);
