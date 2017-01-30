import React, { Component } from 'react';
import { PrismCode } from 'react-prism';
import styled from 'styled-components';

import debounce from 'lodash.debounce';

import { SlideComponent } from '../../shared';

export class SimulateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Simulate'
    };
  }

  onChange = (event) => {
    event.persist();
    this.onSave(event);
  };

  onSave = debounce(({ target: { value }}) => {
    this.setState({
      title: value
    })
  }, 500);

  render() {
    const Figure = styled.figure`
      margin: 0;
    `;

    return (
      <SlideComponent>
        <section className="markdown-body">
          <h1 className="page-title">
            {this.state.title}
          </h1>
          <pre>
            <PrismCode className="language-javascript">
              .simulate(event[, ...args]) => Self
            </PrismCode>
          </pre>

          <div className="form-group">
            <input className="form-control input-block" type="text" placeholder="Simulate" onChange={this.onChange} />
          </div>

          <Figure>
            <pre>
              <PrismCode className="language-javascript">
                {require('./simulate.component.txt')}
              </PrismCode>
            </pre>
          </Figure>
        </section>
      </SlideComponent>
    );
  }
}