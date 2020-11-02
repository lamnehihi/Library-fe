import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

NavBar.propTypes = {
  
};

function NavBar(props) {
  return (
      <Nav tabs>
        <NavItem>
          <NavLink to="/books" active>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/books/search">Search</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/books/asdas23">Single</NavLink>
        </NavItem>
      </Nav>
  );
}

export default NavBar;