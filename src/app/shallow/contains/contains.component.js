import React, { Component } from 'react';
import { PrismCode } from 'react-prism';
import styled from 'styled-components';

import { SlideComponent } from '../../shared';

export class ContainsComponent extends Component {
  render() {
    const Figure = styled.figure`
      margin: 0;
    `;

    return (
      <SlideComponent>
        <section className="markdown-body">
          <h1 className="page-title">
            Contains
          </h1>
          <pre>
            <PrismCode className="language-javascript">
              .contains(nodeOrNodes) => Boolean
            </PrismCode>
          </pre>
          <h2 className="almost-page-title">ContainsMatchingElement</h2>
          <pre>
            <PrismCode className="language-javascript">
              .containsMatchingElement(node) => Boolean
            </PrismCode>
          </pre>
          <h2 id="containsAllMatchingElements">ContainsAllMatchingElements</h2>
          <pre>
            <PrismCode className="language-javascript">
              .containsAllMatchingElements(nodes) => Boolean
            </PrismCode>
          </pre>
          <h2 id="containsAnyMatchingElements">ContainsAnyMatchingElements</h2>
          <pre>
            <PrismCode className="language-javascript">
              .containsAnyMatchingElements(nodes) => Boolean
            </PrismCode>
          </pre>

          <Figure>
            <pre>
              <PrismCode className="language-javascript">
                {require('./contains.component.txt')}
              </PrismCode>
            </pre>
          </Figure>
        </section>
      </SlideComponent>
    );
  }
}
