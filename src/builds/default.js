// This file serves as the Webpack entry point and should not contain any
// code except for imports and a single export.
// import 'babel-polyfill';
import ReactGraphData from '../app/ReactGraphData.jsx';

// Using CommonJS exports to get around Webpack/ES6 module incompatibility/
module.exports = ReactGraphData;
