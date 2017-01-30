// @flow

import React, { Children, Component } from 'react';
import styled from 'styled-components';

export class SliderComponent extends Component {
  state: { active: number, slides: number };

  constructor(props: any) {
    super(props);

    this.state = {
      active: window.localStorage.getItem('slide') || 1,
      slides: Children.count(props.children)
    };
  }

  componentWillMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (e: KeyboardEvent): void => {
    if (39 === e.keyCode) {
      this.onSlideChange(Math.min(this.state.active + 1, this.state.slides));
    } else if (37 === e.keyCode) {
      this.onSlideChange(Math.max(this.state.active - 1, 1));
    }
  };

  onSlideChange = (nextSlide: number): void => {
    this.setState({
      active: nextSlide
    });

    window.localStorage.setItem('slide', nextSlide);
  };

  getWidth = (): number => this.state.slides * 750 - 20;
  getTranslate = (): number => (this.state.active - 1) * (-750);

  render() {
    const Slider = styled.div`
      overflow: hidden;
    `;

    const Belt = styled.div`
      width: ${this.getWidth()}px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      transform: translateX(${this.getTranslate()}px);
    `;

    return (
      <Slider>
        <Belt>
          {this.props.children}
        </Belt>
      </Slider>
    );
  }
}
