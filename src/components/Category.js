import React from 'react';

export const Category = (props) => {
  const iconsList = [
    { name :'Music', image: <i className="asset fa fa-headphones" aria-hidden="true"></i>},
    { name: 'Business & Professional', image: <i className="asset fa fa-briefcase" aria-hidden="true"></i>},
    { name: 'Food & Drink', image: <i className="asset fa fa-cutlery" aria-hidden="true"></i> },
    { name:'Community & Culture', image: <i className="asset fa fa-users" aria-hidden="true"></i>},
    {name:'Performing & Visual Arts', image: <i className="asset fa fa-paint-brush" aria-hidden="true"></i>},
    {name: 'Film, Media & Entertainment', image: <i className="asset fa fa-ticket" aria-hidden="true"></i>},
    {name: 'Sports & Fitness', image: <i className="asset fa fa-futbol-o" aria-hidden="true"></i>},
    {name:'Health & Wellness', image:<i className="asset fa fa-heartbeat" aria-hidden="true"></i>},
    {name:'Science & Technology', image: <i className="asset fa fa-flask" aria-hidden="true"></i> },
    {name:'Travel & Outdoor', image:<i className="asset fa fa-plane" aria-hidden="true"></i>
},
    {name:'Charity & Causes', image: <i className="asset fa fa-hand-peace-o" aria-hidden="true"></i>},
    {name:'Religion & Spirituality', image: <i className="asset fa fa-grav" aria-hidden="true"></i>},
    {name:'Family & Education', image: <i className="asset fa fa-graduation-cap" aria-hidden="true"></i>},
    {name:'Seasonal & Holiday', image: <i className="asset fa fa-sun-o" aria-hidden="true"></i>},
    {name:'Government & Politics', image: <i className="asset fa fa-university" aria-hidden="true"></i>},
    {name:'Fashion & Beauty', image: <i className="asset fa fa-rocket" aria-hidden="true"></i>},
    {name:'Home & Lifestyle', image: <i className="asset fa fa-home" aria-hidden="true"></i>},
    {name:'Auto, Boat & Air', image: <i className="asset fa fa-ship" aria-hidden="true"></i>
},
    {name:'Hobbies & Special Interest', image: <i className="asset fa fa-search" aria-hidden="true"></i>},
    {name:'Other', image: <i className="asset fa fa-cubes" aria-hidden="true"></i>}
  ];

  const image = (name) => {
    const imageObj = iconsList.filter(icon => icon.name === name );
    return imageObj[0].image;
  }

  return (
    <div className="Category">
      <div className='asset-container'>
        {image(props.name) }
      </div>
    <div>{props.name}</div>
  </div>
  )
}
