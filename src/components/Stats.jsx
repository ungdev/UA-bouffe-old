import React        from 'react';
import { Link }     from 'react-router';
import { connect }  from 'react-redux';

import PieChart     from './PieChart';

class Stats extends React.Component {
  constructor() {
    super();

    this.state = {
      orders: null,
      sortedOrders: null
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

    this.setState({orders, sortedOrders});
  }

  render() {

    const charts = [];

    this.state.sortedOrders && this.state.sortedOrders
    .forEach((items, category) => {
      charts.push(<PieChart name={category} items={items} />)
    })

    return (
      <div>
        <div className="b-stats__title">
          <Link to="/" className="b-sell__title__back">&lsaquo;</Link>
          <span>
            Stats
          </span>
        </div>
        {charts}
      </div>
    );
  }

}

export default connect(null, null)(Stats);
