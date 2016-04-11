// Javascript Entry Point

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Dashboard from './dashboard';
import Login from './login';
import AddTodo from './add_todo';
import cookie from 'js-cookie';

function isUserSignedIn() {
  // if (cookie.get('user')) {
  //   return true;
  // } else {
  //   return false;
  // }
  return !!cookie.get('user');
}

function requireAuth(state, replace) {
  if (!isUserSignedIn()) {
    replace('/login');
  }
}

function loginEnter(state, replace) {
  if (isUserSignedIn()) {
    replace('/');
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={Dashboard} onEnter={requireAuth}/>
    <Route path="/login" component={Login} onEnter={loginEnter}/>
    <Route path="/add-todo" component={AddTodo} onEnter={requireAuth}/>
  </Router>
), document.querySelector('.app'));
