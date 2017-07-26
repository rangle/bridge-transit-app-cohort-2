import React, { Component } from 'react';
import { connect } from 'react-redux';

import { inputChange, setSearchKeyword } from './../redux/actions';

import '../App.css';

import Button from './Button';
import { SearchInput } from './SearchInput';
import { CategoriesList } from './CategoriesList';

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
  selectedCategories: state.categories.items ? state.categories.items.filter(category => category.name.includes(state.categories.searchKeyword)) : null,
}), {
  inputChange,
  setSearchKeyword,
});


export default connectConfig(App);
