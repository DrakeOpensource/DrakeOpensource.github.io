import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import smoothScrollPolyfill from 'smoothscroll-polyfill';

// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';

// Page and Componenet imports
import App from './App';
import * as serviceWorker from './serviceWorker';


smoothScrollPolyfill.polyfill();

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
