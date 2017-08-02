import React from 'react';
import { EventsList } from './EventsList';



export const CategoryPage = (props) => (
  <div>
    {
      props.allCategories.map(category => category.id === props.params.categoryID 
      ? <h2>{category.name} Events near Toronto, Ontario</h2> 
      : null)
    }
    <button className="fetch-events" onClick={ () => props.getEvents() }>
      Fetch Events
    </button>
    {props.events 
      ? <EventsList events={props.events} />
      : null
    }
  </div>
); 