import React        from 'react';
import { Link }     from 'react-router';
import { connect }  from 'react-redux';

import PieChart         from '../charts/PieChart';
import LineChart        from '../charts/LineChart';
import Table            from './Table';
import SalesLineCharts  from './SalesLineCharts';
import BiggestEaters    from './BiggestEaters';
import SalesPieCharts   from './SalesPieCharts';

class Stats extends React.Component {
  constructor() {
    super();

    this.state = {
      orders: []
    };

    this.onOrdersFetch = this.onOrdersFetch.bind(this);
  }

  componentDidMount() {
    window.hz('orders').watch().subscribe(this.onOrdersFetch);
  }

  /**
   * Handle orders updates
   *
   * @param  {array} orders
   */
  onOrdersFetch(orders) {
    this.setState({orders});
  }

  render() {

    return (
      <div className="b-stats">
        <div className="b-stats__title">
          <Link to="/" className="b-sell__title__back">&lsaquo;</Link>
          <h1>
            Statistiques des ventes
          </h1>
        </div>
        <Table orders={this.state.orders} />
        <BiggestEaters orders={this.state.orders} />
        <SalesLineCharts orders={this.state.orders} />
        <SalesPieCharts orders={this.state.orders} />
      </div>
    );
  }

}

export default connect(null, null)(Stats);
