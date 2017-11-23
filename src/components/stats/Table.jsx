import React  from 'react';

export default class Table extends React.Component {
  propTypes = {
    orders: React.PropTypes.array
  };

  render() {
    const prices = new Map();
    this.props.orders && this.props.orders
    .map(order => !prices.has(order.name) && prices.set(order.name, order.price));

    const ordersCounters = new Map();
    this.props.orders && this.props.orders
    .map(order => ordersCounters.set(order.name, (ordersCounters.get(order.name) || 0) + 1));

    // generate table rows
    const rows = [];
    ordersCounters
    .forEach((counter, name) => {
      rows.push(<tr>
                  <td>{name}</td>
                  <td>{counter}</td>
                  <td>{`${(prices.get(name) * counter) / 100}`}</td>
                </tr>)
      })

    return (
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
    );
  }
}
