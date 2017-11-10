import React from 'react';

const p2 = n => ((n < 10) ? `0${n}` : n).toString();

export default class AppBarTimer extends React.Component {
  state = {
    year: new Date().getFullYear()
  };

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
    return (
      <span onClick={() => location.reload(true)}>UA {this.state.year} - {this.getDate()}</span>
    )
  }

}
