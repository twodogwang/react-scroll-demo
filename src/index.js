import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import Greeting from './test';

ReactDOM.render( < App / > , document.getElementById('root'));
ReactDOM.render( < Greeting / > , document.getElementById('test'))
registerServiceWorker();