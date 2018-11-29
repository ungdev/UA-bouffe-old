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

const IS_SUBCATEGORY_REGEX = new RegExp('^(boisson|promo)-', 'i');

class Item extends React.Component {
  propTypes = {
    id            : React.PropTypes.string,
    name          : React.PropTypes.string,
    price         : React.PropTypes.number,
    lowerPrice    : React.PropTypes.number,
    effectivePrice: React.PropTypes.number,
    items         : React.PropTypes.array,
    onAddItemClick: React.PropTypes.func,
    category      : React.PropTypes.string
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
      id            : this.props.id,
      name          : this.props.name,
      price         : this.props.price,
      lowerPrice    : this.props.lowerPrice,
      items         : this.props.items,
      category      : this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1),
      noPrep         : this.props.noPrep,
      statsCategory : ['crepes', 'croques', 'pizzas', 'sandwichs'].includes(this.props.category)
                      ? this.props.category
                      : IS_SUBCATEGORY_REGEX.test(this.props.id)
                        ? this.props.id.split('-')[0]
                        : null
    };

    if (this.props.items) {
      this.props.onShowPromotionModalClick(itemProps);
    } else {
      itemProps.items = []
      this.props.onAddItemClick(itemProps);
    }
  }
}

export default connect(null, mapDispatchToProps)(Item);
