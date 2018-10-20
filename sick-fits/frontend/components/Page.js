import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Meta from './Meta';

export default class Page extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Meta />
        <Header />
        { this.props.children }
      </div>
    );
  }
}
