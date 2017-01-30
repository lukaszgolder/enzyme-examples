// @flow

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

export class LogoComponent extends Component {
  static defaultProps: {};

  render() {
    const Logo = styled(Link)`
      cursor: pointer;
      display: inline-block;
      font-size: 1.5rem;
      color: #fff;
      float: left;
      
      &:hover {
        text-decoration: none;
      }
    `;

    return (
      <Logo to={this.props.href}>
        {this.props.name}
      </Logo>
    )
  }
}

LogoComponent.defaultProps = {
  name: 'Enzyme',
  href: '/'
};

LogoComponent.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string
};
