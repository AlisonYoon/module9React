import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  // (./) means same level
import Shiela from './components/Shiela/Shiela'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Shiela />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
