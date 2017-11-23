import React  from 'react';

import LineChart  from '../charts/LineChart';

export default class SalesLineChart extends React.Component {
  propTypes = {
    orders: React.PropTypes.array
  };

  render() {
    const extendedOrders = this.props.orders
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
    while (afterLeadingZero < itemsPerHour.length && itemsPerHour[afterLeadingZero].count === 0) {
      afterLeadingZero++;
    }
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
          data={itemsPerHour.map(e => e.earn)} />
      </div>
    );
  }
}
