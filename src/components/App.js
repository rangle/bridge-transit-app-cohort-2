import React, { Component } from 'react';
import { connect } from 'react-redux';

import { inputChange } from './../redux/actions';
import { SearchInput } from './SearchInput';
import { CategoriesList } from './CategoriesList';
import { pressButton } from './../redux/actions';

import '../App.css';

import Button from './Button';

class App extends Component {
  render() {
    const { pressButton, results, searchInput, categories } = this.props;

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
        <CategoriesList categories={categories} />
        { results ? results.map(result => <li key={result.recipe.label}>{result.recipe.label}</li>) : null }
      </div>
      
    );
  }
}

const connectConfig = connect(state => ({
  searchInput: state.searchInput,
  categories: [
    {id: 1, name: 'technology', name_localized: 'technology', short_name: 'tech', subcategories: [{name: 'women in tech', parent_category: 'techology'}], image: 'http://loremflickr.com/200/200'},
    {id: 2, name: 'board games', name_localized: 'board games', short_name: 'games', subcategories: [{name: 'caverna', parent_category: 'board games'}], image: 'http://loremflickr.com/200/200/dog'},
    {id: 3, name: 'books', name_localized: 'books', short_name: 'books', subcategories: [{name: 'book clubs', parent_category: 'books'}, {name: 'author readings', parent_category: 'books'}], image: 'http://loremflickr.com/200/200/cat'},
    {id: 4, name: 'biking', name_localized: 'biking', short_name: 'bike', subcategories: [{name: 'races', parent_category: 'biking'}, {name: 'group rides', parent_category: 'biking'}], image: 'http://loremflickr.com/200/200/fish'},
    {id: 5, name: 'music', name_localized: 'music', short_name: 'music', subcategories: [{name: 'concerts', parent_category: 'music'}], image: 'http://loremflickr.com/200/200/horse'},
    {id: 6, name: 'technology', name_localized: 'technology', short_name: 'tech', subcategories: [{name: 'women in tech', parent_category: 'techology'}], image: 'http://loremflickr.com/200/200/spider'}
  ]
}), {
  inputChange,
  pressButton
});


export default connectConfig(App);
