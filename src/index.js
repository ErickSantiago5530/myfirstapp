import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';



import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Routes
import AppRoutes from './routes';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Router>
    <AppRoutes />
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
