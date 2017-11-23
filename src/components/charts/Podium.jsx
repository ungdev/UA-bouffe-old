import React  from 'react';

import PodiumText from './PodiumText';

export default class Podium extends React.Component {
  propTypes = {
    players: React.PropTypes.array
  };

  render() {

    if (this.props.players.length === 0) {
      return (<div></div>);
    }

    return (
      <div className="b-podium__container">
        <h2>Les plus gros mangeurs</h2>
        <div className="b-podium">
          {
            this.props.players[1] &&
            <div className="b-podium--2">
              <PodiumText
                code={this.props.players[1][0]}
                money={this.props.players[1][1]} />
            </div>
          }
          {
            this.props.players[0] &&
            <div className="b-podium--1">
              <PodiumText
                code={this.props.players[0][0]}
                money={this.props.players[0][1]} />
            </div>
          }
          {
            this.props.players[2] &&
            <div className="b-podium--3">
              <PodiumText
                code={this.props.players[2][0]}
                money={this.props.players[2][1]} />
            </div>
          }
        </div>
      </div>
    );
  }
}
