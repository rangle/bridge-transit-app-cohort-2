import React, { Component } from 'react';
import { connect } from 'react-redux';

import { inputChange, setSearchKeyword, getCategories } from './../redux/actions';
import { SearchInput } from './SearchInput';
import { CategoriesList } from './CategoriesList';
import Button from './Button';

import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.getCategories();
  }
  
  render() {
    const {
      searchInput,
      allCategories,
      selectedCategories,
      setSearchKeyword,
      getCategories,
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
  searchKeyword: state.category.searchKeyword,
  allCategories: state.category.categories,
  selectedCategories: state.category.categories ? state.category.categories.filter(category => category.name.includes(state.category.searchKeyword)) : null,
}), {
  inputChange,
  setSearchKeyword,
  getCategories,
});


export default connectConfig(App);
