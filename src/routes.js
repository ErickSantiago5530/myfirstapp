//Dependencies
import React from 'react';
import { Route,Switch } from 'react-router-dom';
//Components
import App from './App';
import Fooder from './components/Fooder';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Eventos from './components/Eventos';
import Page404 from './components/Page404';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/eventos" component={Eventos}/>
      <Route component={Page404}/>
    </Switch>
  </App>
;

export default AppRoutes;
