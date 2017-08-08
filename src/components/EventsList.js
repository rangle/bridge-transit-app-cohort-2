import React from 'react';
import { Event } from './Event';

export const EventsList = ({ events }) => {
  return(
    <ul className='events-list'>
      { events.map( event =>  <Event {...event}/> )}
    </ul>
  )
}