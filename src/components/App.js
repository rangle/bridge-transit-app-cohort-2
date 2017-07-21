import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { testAction, pressButton } from './../redux/actions';

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
      <button onClick={(ev) => this.props.pressButton(ev) }>hello</button>
      { this.props.results ? this.props.results.map(result => <li>result.label</li>) : null }
      </div>
    );
  }
}

const connectConfig = connect(state => ({
  results: state.recipe
}), {
  testAction,
  pressButton
});


export default connectConfig(App);
