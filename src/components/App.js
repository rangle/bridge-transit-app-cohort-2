import React, { Component } from 'react';
import { connect } from 'react-redux';

import { inputChange } from './../redux/actions';
import { SearchInput } from './SearchInput';
import { pressButton } from './../redux/actions';

import '../App.css';

import Button from './Button';

class App extends Component {
  render() {
    const { pressButton, results, searchInput } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchInput {...this.props} label="Search Events"/>
      <Button 
        className='hello'
        aria-label='hello'
        content='hello'
        handleClick={ () => pressButton(searchInput) }
      />
      { results ? results.map(result => <li key={result.recipe.label}>{result.recipe.label}</li>) : null }
      </div>
      
    );
  }
}

const connectConfig = connect(state => ({
  searchInput: state.searchInput
}), {
  inputChange,
  pressButton
});


export default connectConfig(App);
