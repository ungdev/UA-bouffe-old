import React  from 'react';

import PieChart from '../charts/PieChart';

export default class SalesPieChart extends React.Component {
  propTypes = {
    orders: React.PropTypes.array
  };

  render() {

    const sortedOrders = new Map();

    // fill the sorted orders Map
    this.props.orders
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

    const pieCharts = [];
    sortedOrders
    .forEach((items, category) => {
      pieCharts.push(<PieChart name={category} items={items} />)
    })

    return (
      <div className="b-stats__charts__container">
        <h2>PieCharts</h2>
        {pieCharts}
      </div>
    );
  }
}
