import React, { Component } from 'react';
import { PrismCode } from 'react-prism';

export class IntroComponent extends Component {
  render() {
    return (
      <section className="markdown-body">
        <h1 className="page-title">
          Enzyme
        </h1>
        <p className="lead">
          Enzyme is a JavaScript Testing utility for React that makes it easier to assert,
          manipulate, and traverse your React Components' output.
        </p>
        <h2>Installation</h2>
        <pre>
          <PrismCode className="language-bash">
            yarn add enzyme react-addons-test-utils --dev
          </PrismCode>
        </pre>
        <h2>Documentation</h2>
        <a href="http://airbnb.io/enzyme">
          http://airbnb.io/enzyme
        </a>
        <h2>My examples repository</h2>
        <a href="https://github.com/lukaszgolder/enzyme-examples">
          https://github.com/lukaszgolder/enzyme-examples
        </a>
      </section>
    );
  }
}
