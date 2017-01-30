import React, { Component, PropTypes } from 'react';
import { PrismCode } from 'react-prism';
import styled from 'styled-components';
import classNames from 'classnames';

import { SlideComponent } from '../../shared';

export class PropsComponent extends Component {
  render() {
    const Figure = styled.figure`
      margin: 0;
    `;

    return (
      <SlideComponent>
        <div className={classNames({ bar: this.props.foo === 2 })}>
          {this.props.foo}
        </div>

        {this.props.foo || (
          <section className="markdown-body">
            <h1 className="page-title">
              Props
          </h1>
            <pre>
              <PrismCode className="language-javascript">
                .props() => Object
          </PrismCode>
            </pre>
            <h2>Prop</h2>
            <pre>
              <PrismCode className="language-javascript">
                .prop(key) => Any
          </PrismCode>
            </pre>
            <h2>SetProps</h2>
            <pre>
              <PrismCode className="language-javascript">
                .setProps(props) => Self
          </PrismCode>
            </pre>

            <Figure>
              <pre>
                <PrismCode className="language-javascript">
                  {require('./props.component.txt')}
                </PrismCode>
              </pre>
            </Figure>
          </section>
        )}
      </SlideComponent>
    );
  }
}

PropsComponent.propTypes = {
  foo: PropTypes.number
};