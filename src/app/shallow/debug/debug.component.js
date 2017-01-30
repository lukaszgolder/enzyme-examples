import React, { Component } from 'react';
import { PrismCode } from 'react-prism';
import styled from 'styled-components';

import { SlideComponent } from '../../shared';

export class DebugComponent extends Component {
  render() {
    const Figure = styled.figure`
      margin: 0;
    `;

    return (
      <SlideComponent>
        <section className="markdown-body">
          <h1 className="page-title">
            Debug
          </h1>
          <p className="lead">
            Returns an HTML-like string of the wrapper for debugging purposes. Useful to print out to the console when tests are not passing when you expect them to.
          </p>
          <Figure>
            <pre>
              <PrismCode className="language-javascript">
                {require('./debug.component.txt')}
              </PrismCode>
            </pre>
          </Figure>
        </section>
      </SlideComponent>
    );
  }
}
