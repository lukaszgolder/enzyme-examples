import React, { Component } from 'react';
import { PrismCode } from 'react-prism';
import styled from 'styled-components';

import { SlideComponent } from '../../shared';

export class InitComponent extends Component {
  render() {
    const Figure = styled.figure`
      margin: 0;
    `;

    return (
      <SlideComponent>
        <section className="markdown-body">
          <h1 className="page-title">
            Shallow Rendering
          </h1>
          <p className="lead">
            Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your
            tests aren't indirectly asserting on behavior of child components.
          </p>
          <Figure>
            <pre>
              <PrismCode className="language-javascript">
                {require('./init.component.txt')}
              </PrismCode>
            </pre>
          </Figure>
        </section>
      </SlideComponent>
    );
  }
}