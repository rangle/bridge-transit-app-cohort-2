import React from 'react';
import { Button } from './Button';
import { Address } from './Address';
import { SearchInput } from './SearchInput';
import { CategoriesList } from './CategoriesList';
import { AddressWindow } from './AddressWindow';

export const Home = props => (
    <div className="home-container">
      { props.displayAddressWindow ? <AddressWindow {...props} /> : null}
        <div className="App-header">
            <Address {...props} />
            <h1 className="header-catch-phrase">Never miss the next event</h1>
            <div className="search-input-container">
            <SearchInput {...props} label="Search Events"/>
            <Button
                className='button is-primary is-large'
                aria-label='search button'
                content='Search'
                handleClick={ () => props.setSearchKeyword(props.searchInput) }
            />
            </div> 
        </div>
        <CategoriesList {...props}/>
    </div>
); 