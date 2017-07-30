import React from 'react';
import Items from './Items';

export const ListItems = events => {
  return(
    <ul className='list-items'>
      { events.map( event =>  <Items {...event}/> )};
    </ul>
  )
}