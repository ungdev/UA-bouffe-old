import React       from 'react';
import { connect } from 'react-redux';
import { Link }    from 'react-router';
import classNames  from 'classnames';

import { lowerPrice } from '../actions';

import * as items from '../items';

import Item           from './Item';
import Sidebar        from './Sidebar';
import PendingOrders  from './PendingOrders';
import ValidModal     from './ValidModal';
import OrderCodeModal from './OrderCodeModal';
import PromoModal     from './PromoModal';
import CancelModal    from './CancelModal';
import AppBarTimer    from './AppBarTimer';

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

    const classesCanettes = classNames(
      'b-sell__page__tabs__tab',
      { 'b-sell__page__tabs__tab--active': this.state.tab === 'canettes' }
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

    const classesTartines = classNames(
      'b-sell__page__tabs__tab',
      { 'b-sell__page__tabs__tab--active': this.state.tab === 'tartines' }
    );

    return (
      <div className="b-sell">
        <OrderCodeModal></OrderCodeModal>
        <PromoModal></PromoModal>
        <ValidModal></ValidModal>
        <CancelModal></CancelModal>
        <div className="b-sell__title">
          <Link to="/" className="b-sell__title__back">&lsaquo;</Link>
          <AppBarTimer />
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
                className={classesCanettes}
                onClick={e => this.changeTab(e.currentTarget, 'canettes')}>
                Boissons
              </div>
              <div
                className={classesCroques}
                onClick={e => this.changeTab(e.currentTarget, 'croques')}>
                Croques
              </div>
              <div
                className={classesCrepes}
                onClick={e => this.changeTab(e.currentTarget, 'crepes')}>
                Crêpes
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
                Sandwichs
              </div>
              <div
                className={classesTartines}
                onClick={e => this.changeTab(e.currentTarget, 'tartines')}>
                Tartines
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
