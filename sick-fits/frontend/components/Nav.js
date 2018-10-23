import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const NaviLink = ({ to, children }) => (
  <Link href={`/${to}`}>
    <a>{ children }</a>
  </Link>
);

const Nav = () => (
  <NavStyles>
    <NaviLink to="items">Items</NaviLink>
    <NaviLink to="sell">Sell</NaviLink>
    <NaviLink to="signup">Signup</NaviLink>
    <NaviLink to="orders">Orders</NaviLink>
    <NaviLink to="me">Account</NaviLink>
  </NavStyles>
);

Nav.propTypes = {

}

export default Nav;
