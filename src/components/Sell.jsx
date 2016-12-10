import React       from 'react';
import { connect } from 'react-redux';
import { Link }    from 'react-router';
import classNames  from 'classnames';

import { lowerPrice } from '../actions';

import * as items from '../items';

import Item          from './Item';
import Sidebar       from './Sidebar';
import PendingOrders from './PendingOrders';
import ValidModal    from './ValidModal';
import PromoModal    from './PromoModal';
import CancelModal   from './CancelModal';

const p2 = n => ((n < 10) ? `0${n}` : n).toString();

const mapStateToProps = state => {
  return {
    lowerPrice: state.lowerPrice
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSwitch() {
      dispatch(lowerPrice());
    }
  };
};

class Sell extends React.Component {
  state = {
    tab: 'general'
  };

  getItems() {
    return Object.keys(items)
      .map(item => items[item])
      .filter(item => {
        return item.category === this.state.tab;
      })
      .map(item => {
        item.effectivePrice = this.props.lowerPrice ? item.lowerPrice : item.price;

        return item;
      });
  }

  getDate() {
    const d = new Date();
    return `${p2(d.getHours())}:${p2(d.getMinutes())}`;
  }

  componentDidMount() {
    this.timeUpdate();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  timeUpdate() {
    this.timeout = setTimeout(() => {
      this.forceUpdate();
      this.timeUpdate();
    }, 1000);
  }

  changeTab(elem, tab) {
    this.setState({
      tab
    });
  }

  render() {
    const toggleClasses = classNames(
      'b-sell__title__priceType',
      {
        'b-sell__title__priceType--switched': this.props.lowerPrice
      }
    );

    const toggleText = (this.props.lowerPrice) ? 'Prix orga' : 'Prix normal';

    const classesGeneral = classNames(
      'b-sell__page__tabs__tab',
      { 'b-sell__page__tabs__tab--active': this.state.tab === 'general' }
    );

    const classesCrepes = classNames(
      'b-sell__page__tabs__tab',
      { 'b-sell__page__tabs__tab--active': this.state.tab === 'crepes' }
    );

    const classesCroques = classNames(
      'b-sell__page__tabs__tab',
      { 'b-sell__page__tabs__tab--active': this.state.tab === 'croques' }
    );

    const classesPizzas = classNames(
      'b-sell__page__tabs__tab',
      { 'b-sell__page__tabs__tab--active': this.state.tab === 'pizzas' }
    );

    const classesSandwichs = classNames(
      'b-sell__page__tabs__tab',
      { 'b-sell__page__tabs__tab--active': this.state.tab === 'sandwichs' }
    );

    return (
      <div className="b-sell">
        <PromoModal></PromoModal>
        <ValidModal></ValidModal>
        <CancelModal></CancelModal>
        <div className="b-sell__title">
          <Link to="/" className="b-sell__title__back">&lsaquo;</Link>
          <span onClick={() => location.reload(true)}>UA 2016 - {this.getDate()}</span>
          <div className={toggleClasses} onClick={() => this.props.onSwitch()}>
            {toggleText}
          </div>
        </div>
        <div className="b-sell__page">
          <Sidebar></Sidebar>
          <div className="b-sell__page__wrap">
            <div className="b-sell__page__tabs">
              <div
                className={classesGeneral}
                onClick={e => this.changeTab(e.currentTarget, 'general')}>
                Général
              </div>
              <div
                className={classesCrepes}
                onClick={e => this.changeTab(e.currentTarget, 'crepes')}>
                Crêpes
              </div>
              <div
                className={classesCroques}
                onClick={e => this.changeTab(e.currentTarget, 'croques')}>
                Croques
              </div>
              <div
                style="display: none;"
                className={classesPizzas}
                onClick={e => this.changeTab(e.currentTarget, 'pizzas')}>
                Pizzas
              </div>
              <div
                className={classesSandwichs}
                onClick={e => this.changeTab(e.currentTarget, 'sandwichs')}>
                Sandwich
              </div>
            </div>
            <div className="b-sell__page__items dragscroll">
              {this.getItems().map(item => {
                return (
                  <Item {...item}></Item>
                );
              })}
            </div>
          </div>
          <PendingOrders></PendingOrders>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sell);
