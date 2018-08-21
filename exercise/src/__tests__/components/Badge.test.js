import React from 'react';
import { shallow } from 'enzyme';
import Badge from '../../components/Badge'

describe("<Badge />", () => {
  it('renders badge without crashing', () => {
    shallow(<Badge />);
  });

  let wrapper 
  it('renders my initials', () => {
    wrapper = shallow(<Badge initials='AA'/>);
    const initials = 'AA';
    expect(wrapper.contains(initials)).toEqual(true);
  });
})