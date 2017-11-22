import React        from 'react';
import { Link }     from 'react-router';
import { connect }  from 'react-redux';

import PieChart     from './PieChart';
import LineChart    from './LineChart';

class Stats extends React.Component {
  constructor() {
    super();

    this.state = {
      orders: null,
      sortedOrders: null,
      ordersCounters: null,
      prices: null,
    };

    this.onOrdersFetch = this.onOrdersFetch.bind(this);
  }

  componentDidMount() {
    window.hz('orders').watch().subscribe(this.onOrdersFetch);
  }

  /**
   * Given an array of orders,
   * create an associative array with interesting data
   * that will be displayed with charts
   *
   * @param  {array} orders
   */
  onOrdersFetch(orders) {
    const sortedOrders = new Map();
    const ordersCounters = new Map();
    const prices = new Map();

    // fill the sorted orders Map
    orders
    // remove the orders useless for stats
    .filter(order => order.statsCategory)
    // put each order in sortedOrders
    .map(order => {
      sortedOrders.set(
        order.statsCategory,
        // the value of each category is a map where keys are item's names of this
        // category, and values are the number of items with this name sold
        (sortedOrders.get(order.statsCategory) || new Map())
          .set(
            order.name,
            (sortedOrders.has(order.statsCategory) && sortedOrders.get(order.statsCategory).get(order.name) || 0) + 1
          )
      );
    })

    // fill the counters Map
    orders
    .map(order => ordersCounters.set(order.name, (ordersCounters.get(order.name) || 0) + 1))

    // fill the prices Map
    orders
    .map(order => !prices.has(order.name) && prices.set(order.name, order.price))

    this.setState({orders, sortedOrders, ordersCounters, prices});
  }

  render() {

    // generate charts
    const charts = [];
    this.state.sortedOrders && this.state.sortedOrders
    .forEach((items, category) => {
      charts.push(<PieChart name={category} items={items} />)
    })

    // generate table rows
    const rows = [];
    this.state.ordersCounters && this.state.ordersCounters
    .forEach((counter, name) => {
      rows.push(<tr>
                  <td>{name}</td>
                  <td>{counter}</td>
                  <td>{`${(this.state.prices.get(name) * counter) / 100}`}</td>
                </tr>)
    })

    return (
      <div className="b-stats">
        <div className="b-stats__title">
          <Link to="/" className="b-sell__title__back">&lsaquo;</Link>
          <h1>
            Statistiques des ventes
          </h1>
        </div>
        <div className="b-stats__summary">
          <h2>Résumé</h2>
          <div className="b-stats__table__container">
            <table className="b-stats__table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Nombre vendu</th>
                  <th>Montant total (€)</th>
                </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </table>
          </div>
        </div>
        <LineChart name="Ventes par heure" items={new Map()} />
        <div className="b-stats__charts__container">
          <h2>Charts</h2>
          {charts}
        </div>
      </div>
    );
  }

}

export default connect(null, null)(Stats);
