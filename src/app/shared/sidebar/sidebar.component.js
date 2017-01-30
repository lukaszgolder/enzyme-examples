// @flow

import React, { Component } from 'react';
import { Link } from 'react-router';

export class SidebarComponent extends Component {
  render() {
    return (
      <nav className="menu">
        <Link to="/" className="menu-item" activeClassName="selected" onlyActiveOnIndex={true}>
          Introduction
        </Link>
        <Link to="/shallow" className="menu-item" activeClassName="selected">
          Shallow Rendering
        </Link>
        <Link to="/mount" className="menu-item" activeClassName="selected">
          Full DOM Rendering
        </Link>
      </nav>
    );
  }
}
