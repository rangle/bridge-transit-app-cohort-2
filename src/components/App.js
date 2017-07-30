import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { inputChange, setSearchKeyword, getCategories, getEvents } from './../redux/actions';
import { SearchInput } from './SearchInput';
import { CategoriesList } from './CategoriesList';
import { CategoryPage } from './CategoryPage';
import Button from './Button';

class App extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const {
      searchInput,
      allCategories,
      selectedCategories,
      chosenCategory,
      events,
      setSearchKeyword,
      getCategories,
      getEvents,
    } = this.props;

    // this connects props to children (for example, CategoriesList)
    const childrenWithProps = React.cloneElement(this.props.children, {...this.props});

    return (
      <div className="App">
        <div>
          <Link to="/category/2">Category 2</Link> | <Link to="/">Home</Link>
        </div>
        <div className="App-header">
          <h1 className="header-catch-phrase">Never miss the next event</h1>
          <div className="search-input-container">
          <SearchInput {...this.props} label="Search Events"/>
            <Button
              className='button is-primary is-large'
              aria-label='search button'
              content='Search'
              handleClick={ () => setSearchKeyword(searchInput) }
            />
          </div>
          </div>
            {childrenWithProps}
      </div>
    );
  }
}

const connectConfig = connect(state => ({
  searchInput: state.searchInput,
  searchKeyword: state.category.searchKeyword,
  allCategories: state.category.categories,
  selectedCategories: state.category.categories 
    ? state.category.categories.filter(category => 
      category.name.toLowerCase().includes(state.category.searchKeyword.toLowerCase())) 
    : null,
  chosenCategory: state.category.chosenCategory,
  events: state.events.events,
}), {
  inputChange,
  setSearchKeyword,
  getCategories,
  getEvents,
});


export default connectConfig(App);
