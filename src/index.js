import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from "./Nav";
import Info from "./Info";
import Temp from "./Temp";
import Maps from "./Maps";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<Info />, document.getElementById('info'));
ReactDOM.render(<Temp />, document.getElementById('temp'));
ReactDOM.render(<Maps />, document.getElementById('maps'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
