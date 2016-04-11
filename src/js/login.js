import React, { Component } from 'react';
import SerialForm from 'react-simple-serial-form';
import cookie from 'js-cookie';
import { hashHistory } from 'react-router';

export default class Login extends Component {

  dataHandler(data) {
    if (data.user === "jd" && data.pass === "jd") {
      // logged
      cookie.set('user', data.user);
      hashHistory.replace('/');
    } else {
      // not
      alert('Nope');
    }
  }

  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <SerialForm onData={this.dataHandler}>
          <div>
            <input name="user" placeholder="Username" type="text"/>
          </div>
          <div>
            <input name="pass" placeholder="Password" type="password"/>
          </div>
          <button>Sign In</button>
        </SerialForm>
      </div>
    )
  }
}
