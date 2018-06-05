import React from 'react';
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import { Graph } from './components/Graph.jsx';

export default class Index extends React.Component {
    render() {
        const { graphdata, caption, graphtype } = this.props;
        const initialState = {
            graph: {
                data: graphdata,
                caption,
                type: graphtype,
            },
        };
        const store = configureStore(initialState);
        return (
          <Provider store={store}>
            <Graph />
          </Provider>
        );
    }
}
