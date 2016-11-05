import React       from 'react';
import { connect } from 'react-redux';
import clone       from 'lodash.clone';
import classNames  from 'classnames';

import { addItem, closeModal } from '../actions';

const ALLOWED_MODALS = ['valid', 'cancel'];

const mapStateToProps = state => {
  return {
    modal: Object.keys(state.modal)
      .filter(m => ALLOWED_MODALS.indexOf(m) === -1)
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

  state = {
    choices: []
  };

  selectItem(index, item) {
    const choices = this.state.choices;
    choices[index] = item;

    this.setState({ choices });
  }

  sendPromo() {
    const promo = clone(this.props.modal.payload);
    promo.items = this.state.choices;
    this.props.onChoosePromoClick(promo);
  }

  render() {
    const hasModal = Boolean(this.props.modal);

    if (!hasModal) {
      return <div></div>;
    }

    console.log(this.state);
    const item           = this.props.modal.payload;
    const effectivePrice = (this.props.lowerPrice ? item.lowerPrice : item.price) / 100;

    if (this.state.choices.length === 0) {
      // select default choice
      this.state.choices = item.items.map(choices => choices[0]);
    }

    return (
      <div>
        <div className="b-modal b-promo-modal" hidden={!hasModal}>
          <h2>{item.name} - {effectivePrice && effectivePrice.toFixed(1)}€</h2>
          <span onClick={() => this.props.onCancelPromoClick(item.id)}>&times;</span>
          <div className="b-promo-modal__choices">
            {item.items.map((choice, i) => {
              const choicePayload = clone(item);
              choicePayload.items = choice;
              return (
                <div className="b-promo-modal__choices__category">
                  {choice.map(item => {
                    const choiceClasses = classNames(
                      'b-promo-modal__choices__category__choice',
                      {
                        'b-promo-modal__choices__category__choice--selected': this.state.choices[i].id === item.id
                      }
                    );

                    return (
                      <div
                        className={choiceClasses}
                        onClick={() => this.selectItem(i, item)}>
                        {item.name}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <button
            className="b-modal__button b-modal__button--validate"
            onClick={() => this.sendPromo()}>Valider</button>
        </div>
        <div className="b-modal-drop" hidden={!hasModal}></div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sell);
