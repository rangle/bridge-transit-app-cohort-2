import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { inputChange, setSearchKeyword, getCategories } from './../redux/actions';
import { SearchInput } from './SearchInput';
import { CategoriesList } from './CategoriesList';
import Button from './Button';

import '../App.css';

class App extends Component {
  render() {
    const {
      searchInput,
      allCategories,
      selectedCategories,
      setSearchKeyword,
      getCategories,
    } = this.props;

    // this connects props to children (for example, CategoriesList)
    const childrenWithProps = React.cloneElement(this.props.children, {...this.props});

    return (
      <div className="App">

        <div>
          <Link to="/category/2">Category 2</Link> | <Link to="/">Home</Link>
        </div>

        <div>
          <SearchInput {...this.props} label="Search Events"/>
          <Button
          className='hello'
          aria-label='hello'
          content='hello'
          handleClick={ () => setSearchKeyword(searchInput) }
          />
          <button
          onClick={ () => getCategories() }
          >
          Fetch Categories
          </button>
          { childrenWithProps }
        </div>

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
