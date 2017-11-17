import React       from 'react';
import { connect } from 'react-redux';

import { closeModal, closeIntermediateModal, openModal, setPlayerCode } from '../actions';

import OrderId  from './OrderId';

const mapStateToProps = state => {
  return {
    modalOrderIdOpened: state.modal.orderId.active
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCancelModal() {
      dispatch(closeModal('orderId'));
    },
    onSubmitOrderCode(code) {
      dispatch(setPlayerCode(code));
      dispatch(closeIntermediateModal('orderId'))
        .then(() => {
          dispatch(openModal('valid'));
        });
    }
  };
};

class OrderIdModal extends React.Component {
  propTypes = {
    modalOrderIdOpened  : React.PropTypes.bool,
    onCancelModal       : React.PropTypes.func,
    onSubmitOrderCode   : React.PropTypes.func
  };

  state = {
    letter: null,
    number: null
  };

  onLetterChange(letter) {
    this.setState({letter});
  }

  onNumberChange(number) {
    this.setState({number});
  }

  onSubmitOrderCode() {
    const code = (this.state.letter && this.state.number) ? `${this.state.letter}${this.state.number}` : null;
    this.setState({
      letter: null,
      number: null
    });
    this.props.onSubmitOrderCode(code);
  }

  render() {
    return (
      <div>
        <div className="b-modal b-order_id-modal" hidden={!this.props.modalOrderIdOpened}>
          <div className="b-modal__row">
            <OrderId
              number={this.state.number} onNumberChange={this.onNumberChange.bind(this)}
              letter={this.state.letter} onLetterChange={this.onLetterChange.bind(this)}>
            </OrderId>
          </div>
          <div className="b-modal__row">
            <button
              className="b-modal__button b-modal__button--validate"
              onClick={() => this.onSubmitOrderCode()}>
              Valider</button>
            <button
              className="b-modal__button b-modal__button--cancel"
              onClick={() => this.props.onCancelModal()}>Annuler</button>
          </div>
        </div>
        <div className="b-modal-drop" hidden={!this.props.modalValidOpened}></div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderIdModal);
