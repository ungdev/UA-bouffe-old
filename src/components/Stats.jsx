import React       from 'react';
import { Link }    from 'react-router';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
  }
};

const mapStateToProps = state => {
  return {
  };
};

class Stats extends React.Component {

  render() {
    return (
      <div>
        <div className="b-stats__title">
          <Link to="/" className="b-sell__title__back">&lsaquo;</Link>
          <span>
            Stats
          </span>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
