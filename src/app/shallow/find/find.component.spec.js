import React from 'react';
import { shallow } from 'enzyme';
import { PrismCode } from 'react-prism';

import { FindComponent } from './find.component';

describe('FindComponent', () => {
  it('finds elements', () => {
    const wrapper = shallow(<FindComponent />);

    expect(wrapper.find('h1.page-title').length).toBe(1);
    expect(wrapper.find('.page-title + .lead').length).toBe(1);
    expect(wrapper.find('section').length).toBe(1);

    expect(wrapper.find(PrismCode).length).toBe(1);

    expect(wrapper.find({ className: 'language-javascript' }).length).toBe(1);
    expect(wrapper.find({ foo: 'bar' }).length).toBe(0);
  });
});
