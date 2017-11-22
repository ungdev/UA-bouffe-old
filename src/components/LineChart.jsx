import React  from 'react';
import Chart  from 'chart.js';

export default class LineChart extends React.Component {
  propTypes = {
    name  : React.PropTypes.string,
    items : React.PropTypes.array
  };

  componentDidMount() {
    const ctx = document.getElementById(this.props.name).getContext('2d');
    const myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from(this.props.items.keys()),
        datasets: [{
          label: "My First dataset",
          backgroundColor: '#fff',
          borderColor: '#FB667A',
          showLine: true,
          fill: false,
          data: Array.from(this.props.items.values())
          }]
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: this.props.name,
            fontColor: '#fff',
            fontSize: 32
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true,
              ticks: {
                fontColor: '#fff',
                padding: 40,
              },
              gridLines: {
                display: true,
                color: "#323C50",
              },
            }],
            yAxes: [{
              display: true,
              ticks: {
                fontColor: '#fff',
                padding: 40,
              },
              gridLines: {
                display: true,
                color: "#323C50",
              },
            }]
          }
        }
    });
  }

  render() {
    return (
      <div className="b-line-chart__container">
        <div className="b-line-chart__canvas-holder">
          <canvas id={this.props.name}></canvas>
        </div>
      </div>
    );
  }
}
