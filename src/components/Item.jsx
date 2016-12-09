import React       from 'react';
import { connect } from 'react-redux';

import { addItem, openModal } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    onAddItemClick(item) {
      dispatch(addItem(item));
    },
    onShowPromotionModalClick(item) {
      dispatch(openModal(item.id, item));
    }
  }
};

class Item extends React.Component {
  propTypes = {
    id            : React.PropTypes.string,
    name          : React.PropTypes.string,
    price         : React.PropTypes.number,
    lowerPrice    : React.PropTypes.number,
    effectivePrice: React.PropTypes.number,
    items         : React.PropTypes.array,
    onAddItemClick: React.PropTypes.func
  };

  render() {
    return (
      <div className="b-item" onClick={() => this.addItem()}>
        {this.props.name} - {(this.props.effectivePrice / 100).toFixed(1)}€
      </div>
    );
  }

  addItem() {
    const itemProps = {
      id        : this.props.id,
      name      : this.props.name,
      price     : this.props.price,
      lowerPrice: this.props.lowerPrice,
      items     : this.props.items
    };

    if (this.props.items) {
      this.props.onShowPromotionModalClick(itemProps);
    } else {
      this.props.onAddItemClick(itemProps);
    }
  }
}

export default connect(null, mapDispatchToProps)(Item);
