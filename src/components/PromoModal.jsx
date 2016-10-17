import React       from 'react';
import { connect } from 'react-redux';
import clone       from 'lodash.clone';

import { addItem, closeModal } from '../actions';

const mapStateToProps = state => {
  return {
    modal: Object.keys(state.modal)
      .filter(m => m !== 'valid')
      .map(m => state.modal[m])
      .find(m => m.active),
    lowerPrice: state.lowerPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChoosePromoClick(promo) {
      dispatch(addItem(promo));
      dispatch(closeModal(promo.id));
    },
    onCancelPromoClick(id) {
      dispatch(closeModal(id));
    }
  };
};

class Sell extends React.Component {
  propTypes = {
    modal             : React.PropTypes.object,
    onChoosePromoClick: React.PropTypes.func,
    onCancelPromoClick: React.PropTypes.func
  };

  render() {
    const hasModal       = Boolean(this.props.modal);

    if (!hasModal) {
      return <div></div>;
    }

    const item           = this.props.modal.payload;
    const effectivePrice = (this.props.lowerPrice ? item.lowerPrice : item.price) / 100;

    return (
      <div>
        <div className="b-modal b-promo-modal" hidden={!hasModal}>
          <h2>{item.name} - {effectivePrice && effectivePrice.toFixed(1)}€</h2>
          <span onClick={() => this.props.onCancelPromoClick(item.id)}>&times;</span>
          <ul className="b-promo-modal__choices">
            {item.items.map(choice => {
              const choicePayload = clone(item);
              choicePayload.items = choice;
              return (
                <li
                  className="b-promo-modal__choices__choice"
                  onClick={() => this.props.onChoosePromoClick(choicePayload)}>
                  {choice.map(item => item.name).join(', ')}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="b-modal-drop" hidden={!hasModal}></div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sell);
