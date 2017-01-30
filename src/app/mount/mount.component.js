import React, { Component } from 'react';
import { PrismCode } from 'react-prism';
import styled from 'styled-components';

export class MountComponent extends Component {
  render() {
    const Figure = styled.figure`
      margin: 0;
    `;

    return (
      <section className="markdown-body">
        <h1 className="page-title">
          Full Rendering API
        </h1>
        <p className="lead">
          Full DOM rendering is ideal for use cases where you have components that may interact with DOM APIs,
          or may require the full lifecycle in order to fully test the component (i.e., componentDidMount etc.)
        </p>
        <p className="lead">
          Full DOM rendering requires that a full DOM API be available at the global scope. This means that it
          must be run in an environment that at least "looks like" a browser environment. If you do not want to
          run your tests inside of a browser, the recommended approach to using <code>mount</code> is to depend
          on a library called <code>jsdom</code> which is essentially a headless browser implemented completely
          in JS.
        </p>
        <pre>
          <PrismCode className="language-javascript">
            mount(node[, options]) => ReactWrapper
          </PrismCode>
        </pre>
        <Figure>
          <pre>
            <PrismCode className="language-javascript">
              {require('./mount.component.txt')}
            </PrismCode>
          </pre>
        </Figure>
      </section>
    );
  }
}
