import React, { Component } from 'react';

import { HeaderComponent, SidebarComponent } from './shared';

import 'primer-css/build/build.css';

export class AppComponent extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onScroll);
  }

  onScroll = (e) => {

  };

  render() {
    return (
      <main>
        <HeaderComponent/>
        <div className="container">
          <div className="columns">
            <div className="one-fourth column">
              <SidebarComponent/>
            </div>
            <div className="three-fourths column">
              {this.props.children}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
