import React  from 'react';

import LineChart  from '../charts/LineChart';

export default class SalesLineChart extends React.Component {
  propTypes = {
    orders: React.PropTypes.array
  };

  render() {
    // sort the orders by creation date and add 2 fields based on 'created'
    const extendedOrders = this.props.orders
      .sort((a, b) => a.created - b.created)
      .map(order => {
        order.date = `${order.created.getDate()}/${order.created.getMonth()}`;
        order.hour = order.created.getHours();
        return order;
      });
    // count the number of days (the days follow each others during the UA)
    const numberOfDays = Array.from(new Set(extendedOrders.map(order => order.date)));
    // init the itemsPerHour array, with 24 hours per day
    let itemsPerHour = new Array(24*numberOfDays.length)
    .fill(0)
    .map((_, i) => {
      return {hour: i % 24, count: 0, earn: 0}
    });
    // count the number sold and the money earn per hour
    extendedOrders.map(order => {
      itemsPerHour[numberOfDays.indexOf(order.date)*24 + order.hour].count += 1;
      itemsPerHour[numberOfDays.indexOf(order.date)*24 + order.hour].earn += order.price;
    });

    // don't display the leading hours without sales
    let afterLeadingZero = 0;
    while (afterLeadingZero < itemsPerHour.length && itemsPerHour[afterLeadingZero].count === 0) {
      afterLeadingZero++;
    }
    // don't display the trailing hours without sales
    let beforeTrailingZero = itemsPerHour.length - 1;
    while (beforeTrailingZero > 0 && itemsPerHour[beforeTrailingZero].count === 0) {
      beforeTrailingZero--;
    }
    itemsPerHour = itemsPerHour.slice(afterLeadingZero, beforeTrailingZero + 1);

    const labels = itemsPerHour.map(e => e.hour);

    return (
      <div>
        <LineChart
          name="Items vendu par heure"
          labels={labels}
          data={itemsPerHour.map(e => e.count)} />,
        <LineChart
          name="Argent gagnée par heure"
          labels={labels}
          data={itemsPerHour.map(e => e.earn / 100)} />
      </div>
    );
  }
}
