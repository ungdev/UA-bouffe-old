import React       from 'react';
import { connect } from 'react-redux';

import { closeModal, sendBasket, nextOrderCode, cleanPlayerCode } from '../actions';

const mapStateToProps = state => {
  return {
    incrementalCode   : state.orderCode.incrementalCode,
    playerCode        : state.orderCode.playerCode,
    basket            : state.basket,
    modalValidOpened  : state.modal.valid.active
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCancelModal() {
      dispatch(closeModal('valid'));
      dispatch(cleanPlayerCode());
    },
    onValidModal(code, basket) {
      document.getElementById('b-modal__button b-modal__button--validate').disabled = true;
      basket = basket.map(item => {
        item.code = code;
        return item;
      });

      dispatch(sendBasket(basket))
        .then(() => {
          Number.isInteger(code) ? dispatch(nextOrderCode()) : dispatch(cleanPlayerCode());
          dispatch(closeModal('valid'));
          document.getElementById('b-modal__button b-modal__button--validate').disabled = false;
        });
    }
  };
};

class ValidModal extends React.Component {
  propTypes = {
    modalValidOpened: React.PropTypes.bool,
    onCancelModal   : React.PropTypes.func,
    onValidModal    : React.PropTypes.func
  };

  render() {
    return (
      <div>
        <div className="b-modal b-valid-modal" hidden={!this.props.modalValidOpened}>
          <div style={{marginTop: "10"}}></div>
          <button
            className="b-modal__button b-modal__button--cancel"
            onClick={() => this.props.onCancelModal()}>Annuler</button>
          <div style={{marginTop: "10"}}></div>
          <button
            className="b-modal__button b-modal__button--validate"
            id="b-modal__button b-modal__button--validate"
            onClick={() => this.props.onValidModal(this.props.playerCode || this.props.incrementalCode, this.props.basket)}>
            Paiement validé
          </button>
        </div>
        <div className="b-modal-drop" hidden={!this.props.modalValidOpened}></div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ValidModal);
