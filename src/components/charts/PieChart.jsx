import React  from 'react';
import Chart  from 'chart.js';

export default class PieChart extends React.Component {
  propTypes = {
    name  : React.PropTypes.string,
    items : React.PropTypes.array
  };

  componentDidMount() {
    const ctx = document.getElementById(this.props.name).getContext('2d');
    const myPieChart = new Chart(ctx,{
      type: 'pie',
      data: {
        labels: Object.keys(this.props.items),
        datasets: [{
          backgroundColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          data: Object.values(this.props.items)
         }]
      },
      options: {
        title: {
          display: true,
          text: this.props.name,
          fontSize: 28,
          fontColor: '#fff',
          fontStyle: 300,
          padding: 25
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontSize: 18,
            fontColor: '#fff',
            padding: 10
          }
        },
        tooltips: {
          position: 'nearest'
        }
      }
    });
  }

  render() {
    return (
      <div className="b-pie-chart__container">
        <div className="b-pie-chart__canvas-holder">
          <canvas id={this.props.name} height="100" width="100"></canvas>
        </div>
      </div>
    );
  }
}
