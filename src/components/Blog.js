import React, { Component } from 'react';
import axios from 'axios';
import logo from './../logo.svg';
import './../App.css';
import './assets/blog.css';

// data
import { todos } from './../todos.json';

// subcomponents
import TodoForm from './TodoForm';

class Blog extends Component {

  constructor() {
    super();
    this.state = {
        todos,
        persons: []
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {

    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              {todo.description}
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    });

    const todosCards = this.state.todos.map((todo,i) => {
      return (
        <div className="card mb-3 cardblog" key={i}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={"assets/img/"+todo.img} className="card-img" alt={todo.title}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{todo.title}</h5>
                <p className="card-text">{todo.description}</p>
                <p className="card-text"><small className="text-muted">{todo.published}</small></p>
              </div>
            </div>
            <hr/>
            {/* <div className="col-md-6">
            </div>
            <div className="col-md-6">
              <a href="#" className="btn btn-primary btn-sm">Ver Contenido</a>
              <button className="btn btn-danger btn-sm" onClick={this.removeTodo.bind(this, i)}>Eliminar </button>
            </div> */}
          </div>
        </div>
      )
    });

    // RETURN THE COMPONENT
    return (
      <div className="Blog">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">

          <div className="row mt-4">
            <div className="col-md-12">
              <div className="row">
                {todosCards}
              </div>
            </div>

            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
                <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
