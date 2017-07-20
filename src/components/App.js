import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { getEvent } from './../redux/actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const connectConfig = connect(state => ({
  events : state.events
}), {
  getEvent,
});


export default connectConfig(App);
