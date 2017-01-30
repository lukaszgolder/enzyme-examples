import React from 'react';
import { shallow } from 'enzyme';

import { PropsComponent } from './props.component';
import { SomeComponent } from '../../shared';

describe('PropsComponent', () => {
  it('has some props', () => {
    const wrapper = shallow(<PropsComponent foo={1} />);

    expect(wrapper.find('div').text()).toBe('1');

    wrapper.setProps({ foo: 2 });

    expect(wrapper.prop('foo')).not.toBe(2);
    expect(wrapper.instance().props.foo).toBe(2);

    expect(wrapper.find('div').hasClass('bar')).toBeTruthy();
  });
});
