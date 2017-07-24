import React from 'react';

export const Category = (props) => (
  <div className="Category">
    <img src={props.image} alt="categoryImage" />
    <div>{props.name}</div>
  </div>
)