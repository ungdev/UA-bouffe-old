import React  from 'react';

export default class Table extends React.Component {
  propTypes = {
    orders: React.PropTypes.array
  };

  render() {
    const ordersCounters = {};
    this.props.orders
    .map(order => {
      if (!ordersCounters[order.name]) {
        ordersCounters[order.name] = {
          count: 0,
          earn: 0
        }
      }
      ordersCounters[order.name].count += 1;
      ordersCounters[order.name].earn += order.effectivePrice;
    });

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
              {
                Object.keys(ordersCounters).map(name => {
                  return (<tr>
                            <td>{name}</td>
                            <td>{ordersCounters[name].count}</td>
                            <td>{ordersCounters[name].earn / 100}</td>
                          </tr>)
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
