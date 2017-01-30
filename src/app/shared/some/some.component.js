import React, { Component, PropTypes } from 'react';

export class SomeComponent extends Component {
  render() {
    return (
      <div>
        {this.props.foo}
      </div>
    );
  }
}

SomeComponent.propTypes = {
  foo: PropTypes.number.isRequired
};
