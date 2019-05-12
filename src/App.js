import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

// data
import { todos } from './todos.json';

// subcomponents
import TodoForm from './components/TodoForm';
import Header from './components/Header';
import Fooder from './components/Fooder';
import Home from './components/Home';
import Content from './components/Content';

class App extends Component {
  constructor() {
    super();
  }

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {


    const { children } = this.props;
    // RETURN THE COMPONENT
    return (
      <div className="App">
        <Header></Header>
        <Content body={children}/>
        <Fooder></Fooder>
      </div>
    );
  }
}

export default App;
