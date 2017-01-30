// @flow

import React, { Component } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

export class NavComponent extends Component {
  render() {
    const Nav = styled.nav`
      float: right;
      font-size: 1rem;
      margin-top: .5rem;
    `;

    const NavLink = styled(Link)`
      color: rgba(255,255,255,0.5);
      
      &:not(:last-child) {
        margin-right: 1.25rem;
      }
      
      &:hover {
        color: #fff;
        text-decoration: none;
      }
      
      &.active {
        color: #fff;
        font-weight: 500;
      }
    `;

    return (
      <Nav>
        <NavLink to="/" activeClassName="active">
          Docs
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </Nav>
    )
  }
}
