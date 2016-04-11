import React, { Component } from 'react';
import cookie from 'js-cookie';
import { Link, hashHistory } from 'react-router';
import todos from './todo_data';

export default class Dashboard extends Component {
  signOutHandler() {
    cookie.remove('user');
    hashHistory.push('/login');
  }

  render() {
    return (
      <div>
        <div>Signed in as {cookie.get('user')} <button onClick={this.signOutHandler}>Sign out</button></div>
        <h1>Acme Router App2</h1>
        <h2>This is the Dashboard</h2>
        <Link to="/add-todo">Add Todo</Link>
        <ul>
          {todos.map(t => <li key={t}>{t}</li>)}
        </ul>
      </div>
    )
  }
}
