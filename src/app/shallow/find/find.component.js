import React, { Component } from 'react';
import { PrismCode } from 'react-prism';
import styled from 'styled-components';

import { SlideComponent } from '../../shared';

export class FindComponent extends Component {
  render() {
    const Figure = styled.figure`
      margin: 0;
    `;

    return (
      <SlideComponent>
        <section className="markdown-body">
          <h1 className="page-title">
            Find
          </h1>
          <p className="lead">
            Finds every node in the render tree of the current wrapper that matches the provided selector.
          </p>
          <Figure>
            <pre>
              <PrismCode className="language-javascript">
                {require('./find.component.txt')}
              </PrismCode>
            </pre>
          </Figure>
        </section>
      </SlideComponent>
    );
  }
}
