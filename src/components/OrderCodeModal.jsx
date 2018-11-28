import React       from 'react';
import { connect } from 'react-redux';

import { closeModal, closeIntermediateModal, openModal, setPlayerCode } from '../actions';

import OrderCode  from './OrderCode';

const mapStateToProps = state => {
  return {
    modalOrderCodeOpened: state.modal.orderCode.active
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCancelModal() {
      dispatch(closeModal('orderCode'));
    },
    onSubmitOrderCode(code) {
      dispatch(setPlayerCode(code));
      dispatch(closeIntermediateModal('orderCode'))
        .then(() => {
          dispatch(openModal('valid'));
        });
    }
  };
};

class OrderCodeModal extends React.Component {
  propTypes = {
    modalOrderCodeOpened: React.PropTypes.bool,
    onCancelModal       : React.PropTypes.func,
    onSubmitOrderCode   : React.PropTypes.func
  };

  state = {
    letter: null,
    number: ''
  };

  onLetterChange(letter) {
    this.setState({letter})
  }

  onNumberChange(number) {
    if(number === '<-') {
      if(number === '') return
      this.setState({ number : this.state.number.substr(0, this.state.number.length - 1) })
      return
    }
    if(this.state.number.length > 2) return
    this.setState({ number : `${this.state.number}${number}` })
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
        <div className="b-modal b-order_code-modal" hidden={!this.props.modalOrderCodeOpened}>
          <div className="b-modal__row">
            <OrderCode
              number={this.state.number} onNumberChange={this.onNumberChange.bind(this)}
              letter={this.state.letter} onLetterChange={this.onLetterChange.bind(this)}>
            </OrderCode>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderCodeModal);
