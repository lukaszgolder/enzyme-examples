import React from 'react';
import { shallow } from 'enzyme';

import { DebugComponent } from './debug.component';

describe('DebugComponent', () => {
  it('debugs component', () => {
    const wrapper = shallow(<DebugComponent />);

    console.log(wrapper.debug());
  });
});
