import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputChange, setSearchKeyword, getCategories, getEvents, getAddress, setAddress,selectAddress, addressInputChange } from './../redux/actions';
import { SearchInput } from './SearchInput';
import { Address } from './Address';
import Button from './Button';

class App extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const {
      searchInput,
      setSearchKeyword,
    } = this.props;

    // this connects props to children (for example, CategoriesList)
    const childrenWithProps = React.cloneElement(this.props.children, {...this.props});

    return (
      <div className="App">
        <div className="App-header">
          <Address {...this.props} />
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
  addresses: state.address.addresses,
  selectedAddress: state.address.selectedAddress,
  addressSearchInput: state.address.addressSearchInput
}), {
  inputChange,
  setSearchKeyword,
  getCategories,
  getEvents,
  getAddress,
  setAddress,
  selectAddress,
  addressInputChange
});


export default connectConfig(App);
