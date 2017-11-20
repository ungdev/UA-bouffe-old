import React       from 'react';
import { connect } from 'react-redux';
import { Link }    from 'react-router';
import classNames  from 'classnames';

import AppBarTimer   from './AppBarTimer';

const mapStateToProps = state => {
  return {
    orders: state.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

class Prepare extends React.Component {
  propTypes = {
    orders: React.PropTypes.array
  };

  state = {
    tab: 'notReady'
  }

  onChangeStatusClick(order, status) {
    const orders = window.hz('orders');

    orders.update({
        id: order.id,
        status
      });

    /* The ready status doesn't modify anymore the div style

    if (status === 'ready') {
      setTimeout(() => {
        this.refs[order.id].style.height  = '0px';
        this.refs[order.id].style.padding = '0 20px';
      }, 500);
    }*/
  }

  getOrders() {
    const orders = this.props.orders
      .filter(order => {
        if (this.state.tab === 'notReady') {
          return ((order.status === 'pending') || (order.status === 'prepare'));
        }
        else return order.status === this.state.tab;
      })
      .map(order => {
        return order;
      });

    orders.sort((a, b) => {
      if (a.created - b.created === 0) {
        return a.name.localeCompare(b.name);
      }

      return a.created - b.created;
    });

    return orders;
  }

  changeTab(elem, tab) {
    this.setState({
      tab
    });
  }

  render() {
    const classesNotReady = classNames(
      'b-prepare__orders__tabs__tab',
      { 'b-prepare__orders__tabs__tab--active': this.state.tab === 'notReady' }
    );

    const classesReady = classNames(
      'b-prepare__orders__tabs__tab',
      { 'b-prepare__orders__tabs__tab--active': this.state.tab === 'ready' }
    );

    const orders = this.props.orders;
    const ordersToDisplay = this.getOrders();

    // for each item, count per status and organize per category
    const ordersCounter = [];
    orders.map(order => {
      if (order.status != "ready") {
        if (order.category == "general") {
          if (!ordersCounter[order.name]) {
            ordersCounter[order.name] = {prepare:0, pending:0}
          }
          ordersCounter[order.name][order.status]++;
        }
        else {
          const category = order.category.charAt(0).toUpperCase() + order.category.slice(1); // In order to use the category with an uppercase char as the first later
          if (!ordersCounter[category]) {
            ordersCounter[category] = {prepare:0, pending:0}
          }
          ordersCounter[category][order.status]++;
        }
      }
    })

    return (
      <div className="b-prepare">
        <div className="b-prepare__title">
          <Link to="/" className="b-sell__title__back">&lsaquo;</Link>
          <AppBarTimer />
        </div>
        <div className="b-prepare__abstract">
          <div className="b-prepare__abstract__title">
            État des commandes
          </div>
          <table className="b-prepare__abstract__table">
            {
              Object.keys(ordersCounter).map(itemName => {
                return (
                  <tr className="b-prepare__abstract__table_row">
                    <td>{itemName}</td>
                    <td className="b-prepare__abstract__table_td_counter b-prepare__abstract__table_td_counter--total">
                      <span>{ordersCounter[itemName].pending + ordersCounter[itemName].prepare}</span>
                    </td>
                    <td className="b-prepare__abstract__table_td_counter b-prepare__abstract__table_td_counter--prepare">
                      <span>{ordersCounter[itemName].prepare}</span>
                    </td>
                  </tr>
                )
              })
            }
          </table>
        </div>
        <div className="b-prepare__orders">
          <div className="b-prepare__orders__tabs">
            <div
              className={classesNotReady}
              onClick={e => this.changeTab(e.currentTarget, 'notReady')}>
              Préparation
            </div>
            <div
              className={classesReady}
              onClick={e => this.changeTab(e.currentTarget, 'ready')}>
              Prêtes
            </div>
          </div>
          <div className="b-prepare__orders__orders">
            {
              (ordersToDisplay.length == 0)
              ?
                <div className="b-prepare__orders__empty">Aucune commande pour le moment.</div>
              :
                ordersToDisplay.map(order => {
                  const pendingClasses = classNames(
                    'b-prepare__orders__order__status',
                    'b-prepare__orders__order__pending',
                    { 'b-prepare__orders__order__status--active': order.status === 'pending' }
                  );

                  const prepareClasses = classNames(
                    'b-prepare__orders__order__status',
                    'b-prepare__orders__order__prepare',
                    { 'b-prepare__orders__order__status--active': order.status === 'prepare' }
                  );

                  const readyClasses = classNames(
                    'b-prepare__orders__order__status',
                    'b-prepare__orders__order__ready',
                    { 'b-prepare__orders__order__status--active': order.status === 'ready' }
                  );

                  const orderClasses = `b-prepare__orders__order b-prepare__orders__order--${order.status}`;

                  const orderName = order.items ? order.items.filter(i => i).map(i => i.name).join(', ') : order.name;

                  return (
                    <div className={orderClasses} ref={order.id}>
                      <div className="b-prepare__orders__order__name">#{order.code} {orderName}</div>
                      <div
                        className={pendingClasses}
                        onClick={() => this.onChangeStatusClick(order, 'pending')}>
                        Attente
                      </div>
                      <div
                        className={prepareClasses}
                        onClick={() => this.onChangeStatusClick(order, 'prepare')}>
                        Préparation
                      </div>
                      <div
                        className={readyClasses}
                        onClick={() => this.onChangeStatusClick(order, 'ready', this)}>
                        Prêt
                      </div>
                    </div>
                  );
                })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Prepare);
