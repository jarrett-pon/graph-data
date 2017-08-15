import Index from './index.jsx';
import ReactDOM from 'react-dom';
import React from 'react';

export default class ReactGraphData {
  constructor(container) {
    this._container = container.container;
    this._render();
  }

  _render() {
    ReactDOM.render(
      <Index {...(this._container.dataset)}/>,
      this._container
    );
  }
}
