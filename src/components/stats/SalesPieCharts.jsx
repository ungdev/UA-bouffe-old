import React  from 'react';

import PieChart from '../charts/PieChart';

export default class SalesPieChart extends React.Component {
  propTypes = {
    orders: React.PropTypes.array
  };

  render() {
    const sortedOrders = {};

    // fill the sorted orders Map
    this.props.orders
    // keep only the orders that will appears on the pie charts
    .filter(order => order.statsCategory)
    // put each order in sortedOrders
    .map(order => {
      // if the category is not already in sortedOrders, add it
      if (!sortedOrders[order.statsCategory]) {
        sortedOrders[order.statsCategory] = {};
      }
      // if this items is not already in sortedOrders, add it
      if (!sortedOrders[order.statsCategory][order.name]) {
        sortedOrders[order.statsCategory][order.name] = 0
      }
      // increment the counter for this item
      sortedOrders[order.statsCategory][order.name] += 1;
    });

    return (
      <div className="b-stats__charts__container">
        <h2>PieCharts</h2>
        {
          Object.keys(sortedOrders)
          .map(category => <PieChart name={category} items={sortedOrders[category]} />)
        }
      </div>
    );
  }
}
