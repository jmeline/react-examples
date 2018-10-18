import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

export default class Page extends Component {
  constructor(props){
    super(props);
  }

  static propTypes = {

  }

  render() {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    );
  }
}
