import React from 'react';
import Graph from './components/Graph.jsx';

export default class Index extends React.Component {
    render() {
        const { graphdata, caption, graphtype } = this.props;
        return (
          <div>
            <Graph graphData={graphdata}
              caption={caption}
              type={graphtype}/>
          </div>
        );
    }
}
