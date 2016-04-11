import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ViewA extends Component {
  render() {
    return (
      <div>
        <h1>This is View A</h1>
        <Link to="/about">About</Link>
      </div>
    )
  }
}
