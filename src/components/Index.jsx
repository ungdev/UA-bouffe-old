import React                 from 'react';
import { Link, hashHistory } from 'react-router';

export default class Index extends React.Component {
  sell() {
    hashHistory.push('/sell');
  }

  prepare() {
    hashHistory.push('/prepare');
  }

  render() {
    return (
      <div className="b-chooser">
        <div className="b-chooser__title">
          <span>UNG - Netgames</span>
        </div>
        <div className="b-chooser__link b-chooser__link--seller" onClick={() => this.sell()}>
          Interface de vente
        </div>
        <div className="b-chooser__separator"></div>
        <div className="b-chooser__link b-chooser__link--prepare" onClick={() => this.prepare()}>
          Interface de préparation
        </div>
      </div>
    );
  }
}
