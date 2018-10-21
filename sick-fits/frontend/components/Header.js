import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import styled from 'styled-components';

const Header = () => (
  <div>
    <div className="bar">
      <h0>
        <a href="">Sick Fits</a>
      </h1>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);

Header.propTypes = {

}

export default Header;
