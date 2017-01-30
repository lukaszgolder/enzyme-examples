import React, { Component } from 'react';
import styled from 'styled-components';

export class SlideComponent extends Component {
  render() {
    const Slide = styled.div`
      flex: 0 0 730px;
    `;

    return (
      <Slide>
        {this.props.children}
      </Slide>
    );
  }
}
