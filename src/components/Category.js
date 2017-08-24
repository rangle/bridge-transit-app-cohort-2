import React from 'react';
import { Link } from 'react-router';

export const Category = (props) => {
  const iconsList = [
    {name :'Music', icon: <i className="asset fa fa-headphones" aria-hidden="true"></i>},
    {name: 'Business & Professional', icon: <i className="asset fa fa-briefcase" aria-hidden="true"></i>},
    {name: 'Food & Drink', icon: <i className="asset fa fa-cutlery" aria-hidden="true"></i> },
    {name:'Community & Culture', icon: <i className="asset fa fa-users" aria-hidden="true"></i>},
    {name:'Performing & Visual Arts', icon: <i className="asset fa fa-paint-brush" aria-hidden="true"></i>},
    {name: 'Film, Media & Entertainment', icon: <i className="asset fa fa-ticket" aria-hidden="true"></i>},
    {name: 'Sports & Fitness', icon: <i className="asset fa fa-futbol-o" aria-hidden="true"></i>},
    {name:'Health & Wellness', icon:<i className="asset fa fa-heartbeat" aria-hidden="true"></i>},
    {name:'Science & Technology', icon: <i className="asset fa fa-flask" aria-hidden="true"></i> },
    {name:'Travel & Outdoor', icon:<i className="asset fa fa-plane" aria-hidden="true"></i>},
    {name:'Charity & Causes', icon: <i className="asset fa fa-hand-peace-o" aria-hidden="true"></i>},
    {name:'Religion & Spirituality', icon: <i className="asset fa fa-grav" aria-hidden="true"></i>},
    {name:'Family & Education', icon: <i className="asset fa fa-graduation-cap" aria-hidden="true"></i>},
    {name:'Seasonal & Holiday', icon: <i className="asset fa fa-sun-o" aria-hidden="true"></i>},
    {name:'Government & Politics', icon: <i className="asset fa fa-university" aria-hidden="true"></i>},
    {name:'Fashion & Beauty', icon: <i className="asset fa fa-rocket" aria-hidden="true"></i>},
    {name:'Home & Lifestyle', icon: <i className="asset fa fa-home" aria-hidden="true"></i>},
    {name:'Auto, Boat & Air', icon: <i className="asset fa fa-ship" aria-hidden="true"></i>},
    {name:'Hobbies & Special Interest', icon: <i className="asset fa fa-search" aria-hidden="true"></i>},
    {name:'Other', icon: <i className="asset fa fa-cubes" aria-hidden="true"></i>}
  ];

  const iconRendering = (name) => {
    return iconsList.map( iconObj => iconObj.name === name ? React.cloneElement(iconObj.icon, {key: iconObj.name}) : null );
  }

  const categoryID = props.id;
  const categoryLink = `/category/${categoryID}`;

  return (
    <div className="Category">
      <Link to={categoryLink}>
        <div className='asset-container'>
          { iconRendering(props.name) }
        </div>
        <h3 className='category-title'>{props.name}</h3>
      </Link>
    </div>
  )
}
