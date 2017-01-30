import React from 'react';
import { shallow } from 'enzyme';

import { SimulateComponent } from './simulate.component';

describe('SimulateComponent', () => {
  it('simulates onChange', () => {
    jasmine.clock().install().mockDate();

    const wrapper = shallow(<SimulateComponent />);

    expect(wrapper.find('.page-title').text()).toBe('Simulate');

    const EventBuilder = (value) => ({
      target: { value },
      persist: jest.fn()
    });

    wrapper.find('input').simulate('change', EventBuilder('Foo'));
    expect(wrapper.state('title')).toBe('Simulate');

    wrapper.find('input').simulate('change', EventBuilder('Bar'));
    jasmine.clock().tick(500);

    expect(wrapper.state().title).toBe('Bar');

    jasmine.clock().uninstall();
  });
});
