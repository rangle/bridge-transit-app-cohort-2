import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { CategoriesList } from '../../components/CategoriesList';
import { Category } from '../../components/Category';

it('renders without crashing', () => {
  const props = {
    allCategories: [{}, {}, {}],
    selectedCategories: null,
  };

  const div = document.createElement('div');
  ReactDOM.render(<CategoriesList {...props} />, div);
});

it('renders correct number of child nodes when selectedCategories is empty', () => {
  const props = {
    allCategories: [{}, {}, {}],
    selectedCategories: null,
  };

  const wrapper = shallow(<CategoriesList {...props} />);

  expect(wrapper.find(Category)).toHaveLength(3);
});