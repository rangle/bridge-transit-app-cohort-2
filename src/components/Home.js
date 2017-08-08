import React from 'react';
import { Button } from './Button';
import { SearchInput } from './SearchInput';
import { CategoriesList } from './CategoriesList';

export const Home = props => (
    <div className="home-container">
        <div className="App-header">
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