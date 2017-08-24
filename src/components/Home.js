import React from 'react';
import { Button } from './Button';
import { SearchInput } from './SearchInput';
import { CategoriesList } from './CategoriesList';

const randomNumber = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let classNumber;

const headerClass = () => {
  if (!classNumber){
    classNumber = randomNumber(0 , 7);
  }
  return `App-header-${classNumber}`;
}

export const Home = props => (
  <div className="home-container">
    <div className={`App-header ${headerClass()}`}>
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