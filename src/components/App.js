import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputChange, setSearchKeyword, getCategories, setAddresses, selectAddress, saveAddress, addressInputChange, showAddressWindow, hideAddressWindow } from './../redux/actions';
import { Navigation } from './Navigation';
import { AddressWindow } from './AddressWindow';
import { eventShellTemporary } from '../constants/EventShellTemp';

class App extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    // this connects props to children (for example, CategoriesList)
    const childrenWithProps = React.cloneElement(this.props.children, {...this.props});

    return (
      <div className="App">
        <Navigation {...this.props} />
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
  selectedCategories: state.category.categories && state.category.categories.length > 0
    ? state.category.categories.filter(category =>
      category.name.toLowerCase().includes(state.category.searchKeyword.toLowerCase()))
    : null,
  categoriesError: state.category.didInvalidate,
  event: state.event.event,
  events: state.events.events,
  eventsError: state.events.didInvalidate,
  addresses: state.address.addresses,
  selectedAddress: state.address.selectedAddress,
  savedAddress: state.address.savedAddress,
  addressSearchInput: state.address.addressSearchInput,
  displayAddressWindow: state.address.displayAddressWindow,
  categoriesFetching: state.category.isFetching,
  eventsFetching: state.events.isFetching,
}), {
  inputChange,
  setSearchKeyword,
  getCategories,
  setAddresses,
  selectAddress,
  saveAddress,
  addressInputChange,
  showAddressWindow,
  hideAddressWindow
});

export default connectConfig(App);
