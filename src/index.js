import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App name={'foo'} bar={123} />,
   document.getElementById('root'));
registerServiceWorker();
