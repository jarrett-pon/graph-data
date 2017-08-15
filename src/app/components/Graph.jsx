import React from 'react';
import { Line, Bar} from 'react-chartjs-2';

export default class Graph extends React.Component {
    render() {
        let { graphData, caption, type } = this.props;
        graphData = JSON.parse(graphData);

        let data = {
            datasets: graphData['datasets'],
            labels: graphData['labels'],
        };
        var graph,
          options = {};

        if (type === 'line') {
          options = {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                },
                gridLines: {
                  drawOnChartArea: false
                }
              }],
              xAxes: [{
                gridLines: {
                  drawOnChartArea: false
                }
              }]
            },
            legend: {
              position: 'bottom'
            }
          }
          data.datasets.map((dataset) => {
            return dataset.pointRadius = 2;
          });
          console.log(data);
          graph = (<Line data={data} options={options} />);
        } else if (type === 'bar') {
          options = {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true
                },
                gridLines: {
                  drawOnChartArea: false
                }
              }],
              xAxes: [{
                gridLines: {
                  drawOnChartArea: false
                }
              }]
            },
            legend: {
              position: 'bottom'
            }
          }
          graph = (<Bar data={data} options={options} />);
        }

        return (
            <div>
              {graph}
              <div style={{ textAlign: 'center' }}>{caption}</div>
            </div>
        );
    }
}
