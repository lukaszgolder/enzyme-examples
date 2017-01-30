import React, { Component } from 'react';
import { PrismCode } from 'react-prism';
import styled from 'styled-components';

import { OtherComponent, SlideComponent, SomeComponent } from '../../shared';

export class FilterComponent extends Component {
  render() {
    const Figure = styled.figure`
      margin: 0;
    `;

    return (
      <SlideComponent>
        <section className="markdown-body">
          <h1 className="page-title">
            Filter
          </h1>
          <p className="lead">
            Returns a new wrapper with only the nodes of the current wrapper that match the provided selector.
          </p>
          <Figure>
            <pre>
              <PrismCode className="language-javascript">
                {require('./filter.component.txt')}
              </PrismCode>
            </pre>
          </Figure>

          <SomeComponent foo={100} />
          <SomeComponent foo={200} />
          <OtherComponent foo={100} />
        </section>
      </SlideComponent>
    );
  }
}
