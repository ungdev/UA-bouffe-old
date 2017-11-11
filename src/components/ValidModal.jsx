import React       from 'react';
import { connect } from 'react-redux';

import { closeModal, sendBasket, nextOrderCode } from '../actions';

const mapStateToProps = state => {
  return {
    code              : state.orderCode,
    basket            : state.basket,
    modalValidOpened  : state.modal.valid.active,
    modalValidPayload : state.modal.valid.payload
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCancelModal() {
      dispatch(closeModal('valid'));
    },
    onValidModal(code, basket) {
      basket = basket.map(item => {
        item.code = code;
        return item;
      });

      dispatch(sendBasket(basket))
        .then(() => {
          dispatch(nextOrderCode());
          dispatch(closeModal('valid'));
        });
    }
  };
};

class ValidModal extends React.Component {
  propTypes = {
    modalValidOpened: React.PropTypes.bool,
    onCancelModal   : React.PropTypes.func,
    onValidModal    : React.PropTypes.func,
  };

  render() {
    return (
      <div>
        <div className="b-modal b-valid-modal" hidden={!this.props.modalValidOpened}>
          Commande {this.props.modalValidPayload && this.props.modalValidPayload.id}
          <button
            className="b-modal__button b-modal__button--cancel"
            onClick={() => this.props.onCancelModal()}>Annuler</button>
          <button
            className="b-modal__button b-modal__button--validate"
            onClick={() => this.props.onValidModal(this.props.code, this.props.basket)}>
            Paiement validé
          </button>
        </div>
        <div className="b-modal-drop" hidden={!this.props.modalValidOpened}></div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ValidModal);
