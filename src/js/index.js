// Javascript Entry Point

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import ViewA from './view_a';
import ViewB from './view_b';

render((
  <Router history={hashHistory}>
    <Route path="/" component={ViewA}/>
    <Route path="/about" component={ViewB}/>
  </Router>
), document.querySelector('.app'));
