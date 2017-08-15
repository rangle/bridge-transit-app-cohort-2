import React from 'react';

import { Category } from './Category';
import { Spinner } from './Spinner';

export const CategoriesList = (props) => {
  const categories = props.selectedCategories
    ? props.selectedCategories
    : props.allCategories && props.allCategories.length > 0
      ? props.allCategories
      : null;

  return (
    props.categoriesFetching ? <div className="overlay"><Spinner/></div> :
    <div className="Categories-list">
      {
        categories
          ? categories.map(category => <Category key={category.name} name={category.name} id={category.id} />)
          : props.categoriesError ? 'Sorry, there seems to be an error. Please try again later.' : null
      }
    </div>
  );
};
