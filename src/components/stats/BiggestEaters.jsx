import React  from 'react';

import Podium from '../charts/Podium';

const playerCodeRgx = new RegExp('^[A-Z][1-3][0-9]?$');

export default class BiggestEaters extends React.Component {
  propTypes = {
    orders: React.PropTypes.array
  };

  render() {
    const eaters = {};
    this.props.orders
    .filter(order => playerCodeRgx.test(String(order.code)))
    .map(order => eaters[order.code]
      ? eaters[order.code] += order.effectivePrice
      : eaters[order.code] = order.effectivePrice
    )

    const sortedEaters = Object.keys(eaters)
    .map(player => [player, eaters[player]])
    .sort((a, b) => b[1] - b[0])

    console.log(sortedEaters);

    return (
      <div>
        <Podium players={sortedEaters} />
      </div>
    );
  }
}
