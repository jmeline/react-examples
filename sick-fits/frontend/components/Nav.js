import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Nav = () => (
  <div>
    <Link href="/">
      <a>{ `<Home!>` }</a>
    </Link>
    &nbsp;
    <Link href="/sell">
      <a>{ `<Sell!>` }</a>
    </Link>
  </div>
);

Nav.propTypes = {

}

export default Nav;
