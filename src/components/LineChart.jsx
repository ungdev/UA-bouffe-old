import React  from 'react';
import Chart  from 'chart.js';

export default class LineChart extends React.Component {
  propTypes = {
    name  : React.PropTypes.string,
    labels: React.PropTypes.array,
    data  : React.PropTypes.array
  };

  componentDidUpdate() {
    console.log('MOUNTED');
    const ctx = document.getElementById(this.props.name).getContext('2d');
    const myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.props.labels,
        datasets: [{
          label: "My First dataset",
          backgroundColor: '#fff',
          borderColor: '#FB667A',
          showLine: true,
          fill: false,
          data: this.props.data
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
    console.log("labels", this.props.labels);
    console.log("props", this.props.data);
    return (
      <div className="b-line-chart__container">
        <div className="b-line-chart__canvas-holder">
          <canvas id={this.props.name}></canvas>
        </div>
      </div>
    );
  }
}
