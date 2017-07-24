import React from 'react';
/*import pic from './pic.jpg';*/

export const Category = (props) => (
  <div className="category">
    {props.name}
    <img src={props.image} alt="categoryImage" />


  </div>
)