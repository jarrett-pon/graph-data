import React from 'react';
import { Line, Bar} from 'react-chartjs-2';
import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { setType } from '../actions/graph';

export class UnconnectedGraph extends React.Component {
    onHandleClick() {
        if (this.props.type === 'line') {
            this.props.setType('bar');
        } else {
            this.props.setType('line');
        }
    }
    render() {
        const { data, caption, type } = this.props;
        let graphData, finalData;
        if (data) {
          graphData = JSON.parse(data);

          finalData = {
              datasets: graphData['datasets'],
              labels: graphData['labels'],
          };
        } else {
          finalData = {};
        }
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
          finalData.datasets.map((dataset) => {
            return dataset.pointRadius = 2;
          });
          graph = (<Line data={graphData} options={options} />);
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
          finalData.datasets.map((dataset) => {
            return dataset.borderWidth = 2;
          });
          graph = (<Bar data={graphData} options={options} />);
        }

        return (
            <div>
              {graph}
              <div style={{ textAlign: 'center' }}>{caption}</div>
              <div onClick={()=>{this.onHandleClick()}}>{type}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    data: state.graph.data,
    stories: state.graph.caption,
    type: state.graph.type,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setType }, dispatch);
}

export const Graph = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnconnectedGraph);
