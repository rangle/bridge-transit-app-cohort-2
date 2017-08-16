import React from 'react'
import { shallow } from 'enzyme'
import Foo from './Foo';

describe('Foo', () => {
  it('renders correctly', () => {
    const component = shallow(<Foo />);
    expect(component).toMatchSnapshot();
  })
});