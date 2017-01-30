import React, { Component, PropTypes } from 'react';

export class OtherComponent extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

OtherComponent.propTypes = {
  foo: PropTypes.number.isRequired
};
