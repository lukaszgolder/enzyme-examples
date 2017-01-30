import React from 'react';
import { Link } from 'react-router';
import { shallow } from 'enzyme';

import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  it('renders Link component with default props', () => {
    const wrapper = shallow(<LogoComponent/>);

    expect(wrapper.dive().containsMatchingElement(<Link to="/">Enzyme</Link>)).toBeTruthy();
  });

  it('renders Link component based on props', () => {
    const wrapper = shallow(<LogoComponent/>);

    wrapper.setProps({
      name: 'emyznE',
      href: '/about'
    });

    expect(wrapper.dive().containsMatchingElement(<Link to="/about">emyznE</Link>)).toBeTruthy();
  });
});
