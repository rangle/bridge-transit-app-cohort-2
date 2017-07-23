import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { inputChange } from './../redux/actions';
import { SearchInput } from './SearchInput';

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
        <SearchInput {...this.props} label="Search Events"/>
      </div>
      
    );
  }
}

const connectConfig = connect(state => ({
  searchInput: state.searchInput
}), {
  inputChange
});


export default connectConfig(App);
