import React       from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../actions';

const mapStateToProps = state => {
  return {
    order            : state.modal.cancel.payload,
    modalCancelOpened: state.modal.cancel.active
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCancelModal() {
      dispatch(closeModal('cancel'));
    },
    onValidModal(order) {
      const orders = window.hz('orders');

      orders.update({
        id     : order.id,
        removed: true
      });

      dispatch(closeModal('cancel'));
    }
  };
};

class CancelModal extends React.Component {
  propTypes = {
    order            : React.PropTypes.object,
    modalCancelOpened: React.PropTypes.bool,
    onCancelModal    : React.PropTypes.func,
    onValidModal     : React.PropTypes.func,
  };

  render() {
    return (
      <div>
        <div className="b-modal b-valid-modal" hidden={!this.props.modalCancelOpened}>
          <button
            className="b-modal__button b-modal__button--validate"
            onClick={() => this.props.onCancelModal()}>Retour</button>
          <button
            className="b-modal__button b-modal__button--cancel"
            onClick={() => this.props.onValidModal(this.props.order)}>Annuler la commande</button>
        </div>
        <div className="b-modal-drop" hidden={!this.props.modalCancelOpened}></div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CancelModal);
