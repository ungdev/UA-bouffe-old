import React  from 'react';

export default class PodiumText extends React.Component {
  propTypes = {
    money : React.PropTypes.number,
    code  : React.PropTypes.text
  };

  render() {
    return (
      <div className="b-podium__text">
        <div className="b-podium__text__money">
          {this.props.money / 100}€
        </div>
        <div className="b-podium__text__code">
          {this.props.code}
        </div>
      </div>
    );
  }
}
