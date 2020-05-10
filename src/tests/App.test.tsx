import React from 'react';
import { shallow } from 'enzyme';

import Header from '../components/Header';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);;
  });

  it('renders header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toEqual(true);
  });
});
