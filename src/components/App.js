import React, { Component } from 'react';
import { connect } from 'react-redux';

import { inputChange, setSearchKeyword } from './../redux/actions';
import { SearchInput } from './SearchInput';
import { CategoriesList } from './CategoriesList';

import '../App.css';

import Button from './Button';

class App extends Component {
  render() {
    const { 
            searchInput, 
            allCategories, 
            selectedCategories,
            setSearchKeyword,
          } = this.props;

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
          handleClick={ () => setSearchKeyword(searchInput) }
        />
        <CategoriesList allCategories={allCategories} selectedCategories={selectedCategories} />
      </div>
      
    );
  }
}

const connectConfig = connect(state => ({
  searchInput: state.searchInput,
  searchKeyword: state.categories.searchKeyword,
  allCategories: state.categories.items,
  selectedCategories: state.categories.items ? state.categories.items.filter(category => category.items.name.includes(state.categories.searchKeyword)) : null
}), {
  inputChange,
  setSearchKeyword,
});


export default connectConfig(App);
