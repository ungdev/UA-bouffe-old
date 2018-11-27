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
  render() {

    return (
      <div className="b-stats">
        <div className="b-stats__title">
          <Link to="/" className="b-sell__title__back">&lsaquo;</Link>
          <h1>
            Statistiques des ventes
          </h1>
        </div>
        <Table orders={this.props.orders} />
        <BiggestEaters orders={this.props.orders} />
        <SalesLineCharts orders={this.props.orders} />
        <SalesPieCharts orders={this.props.orders} />
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    orders: state.allorders
  };
};

export default connect(mapStateToProps, null)(Stats);
