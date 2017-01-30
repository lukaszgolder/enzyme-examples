import React from 'react';
import { mount } from 'enzyme';

import { SliderComponent } from './slider.component';

describe('SliderComponent', () => {
  it('adds keyDown event listener on mount', () => {
    document.addEventListener = jest.fn();

    const wrapper = mount(<SliderComponent />);

    expect(document.addEventListener).toBeCalledWith(
      'keydown',
      jasmine.any(Function)
    );
  });

  it('removes keyDown event listener on unmount', () => {
    document.removeEventListener = jest.fn();

    const wrapper = mount(<SliderComponent />);

    wrapper.unmount();

    expect(document.removeEventListener).toBeCalledWith(
      'keydown',
      jasmine.any(Function)
    );
  });

  it('has initial state', () => {
    const wrapper = mount(
      <SliderComponent>
        <div />
        <div />
      </SliderComponent>
    );

    expect(wrapper.state().active).toBe(1);
    expect(wrapper.state().slides).toBe(2);
  });

  it('reads initial slide from the localStorage', () => {
    window.localStorage.getItem = jest.fn();
    window.localStorage.getItem.mockReturnValue(4);

    const wrapper = mount(<SliderComponent />);

    expect(wrapper.state().active).toBe(4);
  });

  it('changes to the next slide after pressing right arrow', () => {
    window.localStorage.setItem = jest.fn();

    const wrapper = mount(<SliderComponent />);

    wrapper.setState({
      active: 2,
      slides: 3
    });

    wrapper.instance().onKeyDown({ keyCode: 39 });

    expect(wrapper.state().active).toBe(3);
    expect(window.localStorage.setItem).toBeCalledWith('slide', 3);

    wrapper.instance().onKeyDown({ keyCode: 39 });
    expect(wrapper.state().active).toBe(3);
    expect(window.localStorage.setItem.mock.calls.length).toBe(2);
  });

  it('changes to the previous slide after pressing left arrow', () => {
    window.localStorage.setItem = jest.fn();

    const wrapper = mount(<SliderComponent />);

    wrapper.setState({
      active: 2,
      slides: 3
    });

    wrapper.instance().onKeyDown({ keyCode: 37 });

    expect(wrapper.state().active).toBe(1);
    expect(window.localStorage.setItem).toBeCalledWith('slide', 1);

    wrapper.instance().onKeyDown({ keyCode: 37 });
    expect(wrapper.state().active).toBe(1);
    expect(window.localStorage.setItem.mock.calls.length).toBe(2);
  });
});
