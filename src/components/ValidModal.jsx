import React       from 'react';
import { connect } from 'react-redux';

import { closeModal, sendBasket } from '../actions';

const mapStateToProps = state => {
  return {
    basket          : state.basket,
    modalValidOpened: state.modal.valid.active
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCancelModal() {
      dispatch(closeModal('valid'));
    },
    onValidModal(basket) {
      dispatch(sendBasket(basket))
        .then(() => {
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
          <button
            className="b-modal__button b-modal__button--cancel"
            onClick={() => this.props.onCancelModal()}>Annuler</button>
          <button
            className="b-modal__button b-modal__button--validate"
            onClick={() => this.props.onValidModal(this.props.basket)}>Paiement validé</button>
        </div>
        <div className="b-modal-drop" hidden={!this.props.modalValidOpened}></div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ValidModal);
