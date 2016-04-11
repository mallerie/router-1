import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import todos from './todo_data';
import SerialForm from 'react-simple-serial-form';

export default class ViewA extends Component {
  dataHandler(data) {
    todos.push(data.todo);
    hashHistory.push('/');
  }

  render() {
    return (
      <div>
        <h1>Add Todo</h1>
        <SerialForm onData={this.dataHandler}>
          <input type="text" name="todo"/>
          <button>Save</button>
        </SerialForm>
      </div>
    )
  }
}
