import React       from 'react';
import { connect } from 'react-redux';
import { Link }    from 'react-router';
import classNames  from 'classnames';

const p2 = n => ((n < 10) ? `0${n}` : n).toString();

const mapStateToProps = state => {
  return {
    orders: state.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

class Prepare extends React.Component {
  propTypes = {
    orders: React.PropTypes.array
  };

  onChangeStatusClick(order, status) {
    const orders = window.hz('orders');

    orders.update({
        id: order.id,
        status
      });

    if (status === 'ready') {
      setTimeout(() => {
        this.refs[order.id].style.height  = '0px';
        this.refs[order.id].style.padding = '0 20px';
      }, 500);
    }
  }

  getDate() {
    const d = new Date();
    return `${p2(d.getHours())}:${p2(d.getMinutes())}`;
  }

  componentDidMount() {
    this.timeUpdate();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  timeUpdate() {
    this.timeout = setTimeout(() => {
      this.forceUpdate();
      this.timeUpdate();
    }, 1000);
  }

  render() {
    const orders = this.props.orders
      .sort((a, b) => {
        if (a.created - b.created === 0) {
          return a.name.localeCompare(b.name);
        }

        return a.created - b.created;
      })

    console.log('render');

    return (
      <div className="b-prepare">
        <div className="b-prepare__title">
          <Link to="/" className="b-sell__title__back">&lsaquo;</Link>
          <span onClick={() => location.reload(true)}>UA Bouffe 2016 - {this.getDate()}</span>
        </div>
        <div className="b-prepare__orders">
          {orders.map(order => {
            const pendingClasses = classNames(
              'b-prepare__orders__order__status',
              'b-prepare__orders__order__pending',
              { 'b-prepare__orders__order__status--active': order.status === 'pending' }
            );

            const prepareClasses = classNames(
              'b-prepare__orders__order__status',
              'b-prepare__orders__order__prepare',
              { 'b-prepare__orders__order__status--active': order.status === 'prepare' }
            );

            const readyClasses = classNames(
              'b-prepare__orders__order__status',
              'b-prepare__orders__order__ready',
              { 'b-prepare__orders__order__status--active': order.status === 'ready' }
            );

            const orderClasses = `b-prepare__orders__order b-prepare__orders__order--${order.status}`;

            const orderName = order.items ? order.items.filter(i => i).map(i => i.name).join(', ') : order.name;

            return (
              <div className={orderClasses} ref={order.id}>
                <div className="b-prepare__orders__order__name">#{order.code} {orderName}</div>
                <div
                  className={pendingClasses}
                  onClick={() => this.onChangeStatusClick(order, 'pending')}>
                  Attente
                </div>
                <div
                  className={prepareClasses}
                  onClick={() => this.onChangeStatusClick(order, 'prepare')}>
                  Préparation
                </div>
                <div
                  className={readyClasses}
                  onClick={() => this.onChangeStatusClick(order, 'ready', this)}>
                  Prêt
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Prepare);
