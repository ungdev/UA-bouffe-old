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
      itemsPerHour: []
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
    });

    // fill the counters Map
    orders
    .map(order => ordersCounters.set(order.name, (ordersCounters.get(order.name) || 0) + 1));

    // fill the prices Map
    orders
    .map(order => !prices.has(order.name) && prices.set(order.name, order.price));

    // fill the itemsPerHour Map
    const extendedOrders = orders
      .sort((a, b) => a.created - b.created)
      .map(order => {
        order.date = `${order.created.getDate()}/${order.created.getMonth()}`;
        order.hour = order.created.getHours();
        return order;
      });
    const numberOfDays = Array.from(new Set(extendedOrders.map(order => order.date)));
    let itemsPerHour = new Array(24*numberOfDays.length).fill(0).map((_, i) => {
      return {hour: i, count: 0, earn: 0}
    });
    extendedOrders.map(order => {
      itemsPerHour[numberOfDays.indexOf(order.date)*24 + order.hour].count += 1;
      itemsPerHour[numberOfDays.indexOf(order.date)*24 + order.hour].earn += order.price;
    })

    let afterLeadingZero = 0;
    while (itemsPerHour[afterLeadingZero].count === 0 && afterLeadingZero < itemsPerHour.length) {
      afterLeadingZero++;
    }
    let beforeTrailingZero = itemsPerHour.length - 1;
    while (itemsPerHour[beforeTrailingZero].count === 0 && beforeTrailingZero > 0) {
      beforeTrailingZero--;
    }
    itemsPerHour = itemsPerHour.slice(afterLeadingZero, beforeTrailingZero + 1);

    this.setState({orders, sortedOrders, ordersCounters, prices, itemsPerHour});
  }

  render() {

    // generate pie charts
    const pieCharts = [];
    this.state.sortedOrders && this.state.sortedOrders
    .forEach((items, category) => {
      pieCharts.push(<PieChart name={category} items={items} />)
    })

    // generate line charts
    const labels = this.state.itemsPerHour.map(e => e.hour);
    const lineCharts = [
      <LineChart
        name="Items vendu par heure"
        labels={labels}
        data={this.state.itemsPerHour.map(e => e.count)} />,
      <LineChart
        name="Argent gagnée par heure"
        labels={labels}
        data={this.state.itemsPerHour.map(e => e.earn)} />
    ];


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
        {lineCharts}
        <div className="b-stats__charts__container">
          <h2>PieCharts</h2>
          {pieCharts}
        </div>
      </div>
    );
  }

}

export default connect(null, null)(Stats);
