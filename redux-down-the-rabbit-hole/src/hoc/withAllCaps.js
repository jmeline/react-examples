import React, { Component } from 'react';

const withCounter = step => WrappedComponent => ({ ...props }) =>
  class extends Component {
    state = 0;
    add = () => this.setState(state => state + step);
    minus = () => this.setState(state => state - step);
    render() {
      return (
        <WrappedComponent
          {...props}
          add={this.add}
          minus={this.minus}
          counter={this.state} />
      );
    }
  };

export default withCounter;



