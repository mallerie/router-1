import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ViewB extends Component {
  render() {
    return (
      <div>
        <h1>This is View B</h1>
        <Link className="router-link" to="/">Home</Link>
      </div>
    )
  }
}
