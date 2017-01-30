// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

import { LogoComponent, NavComponent } from '../';

export class HeaderComponent extends Component {
  render() {
    const Header = styled.header`
      padding-top: 1rem;
      padding-bottom: 1rem;
      margin-bottom: 1.5rem;
      text-align: center;
      background-color: #4078c0;
    `;

    return (
      <Header>
        <div className="container">
          <LogoComponent/>
          <NavComponent/>
        </div>
      </Header>
    );
  }
}
