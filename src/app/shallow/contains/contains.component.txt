import React from 'react';
import { shallow } from 'enzyme';
import { PrismCode } from 'react-prism';

import { ContainsComponent } from './contains.component';
import { SomeComponent } from '../../shared';

describe('ContainsComponent', () => {
  it('contains elements', () => {
    const wrapper = shallow(<ContainsComponent />);

    expect(wrapper.contains(
      <h1 className="page-title">Contains</h1>
    )).toBeTruthy();
    expect(wrapper.contains(
      <h1>Contains</h1>
    )).toBeFalsy();

    expect(wrapper.containsMatchingElement(
      <h2 className="almost-page-title">ContainsMatchingElement</h2>
    )).toBeTruthy();
    expect(wrapper.containsMatchingElement(
      <h2>ContainsMatchingElement</h2>
    )).toBeTruthy();

    expect(wrapper.containsAllMatchingElements([
      <h1>Contains</h1>,
      <h2>ContainsMatchingElement</h2>
    ])).toBeFalsy();

    expect(wrapper.containsAllMatchingElements([
      <h1>Contains</h1>,
      <pre>
        <PrismCode>
          .contains(nodeOrNodes) => Boolean
        </PrismCode>
      </pre>
    ])).toBeTruthy();

    expect(wrapper.containsAnyMatchingElements([
      <h1 foo={true}>Contains</h1>,
      <pre></pre>,
      <div className="error" />
    ])).toBeFalsy();
  });
});
