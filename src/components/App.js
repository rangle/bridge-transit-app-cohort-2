import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputChange, setSearchKeyword, getCategories, getEvents, setAddresses, selectAddress, saveAddress, addressInputChange, showAddressWindow, hideAddressWindow } from './../redux/actions';
import { Navigation } from './Navigation';
import { AddressWindow } from './AddressWindow';

class App extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    // this connects props to children (for example, CategoriesList)
    const childrenWithProps = React.cloneElement(this.props.children, {...this.props});

    return (
      <div className="App">
        <Navigation {...this.props}/>
        { this.props.displayAddressWindow ? <AddressWindow {...this.props} /> : null}
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
  savedAddress: state.address.savedAddress,
  addressSearchInput: state.address.addressSearchInput,
  displayAddressWindow: state.address.displayAddressWindow
}), {
  inputChange,
  setSearchKeyword,
  getCategories,
  getEvents,
  setAddresses,
  selectAddress,
  saveAddress,
  addressInputChange,
  showAddressWindow,
  hideAddressWindow
});


export default connectConfig(App);
