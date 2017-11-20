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
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
         }]
      }
    });
  }

  render() {
    return (
      <div className="b-chart__container">
        <div className="b-chart__canvas-holder">
          <canvas id={this.props.name} height="100" width="100"></canvas>
        </div>
      </div>
    );
  }
}
