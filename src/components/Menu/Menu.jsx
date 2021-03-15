import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Menu.css';

function Menu ({ items }) {
  const links = items.map(item => {
    return (
      <NavLink
        exact
        key={item.id}
        to={item.route}
      >
        {item.label}
      </NavLink>
    )}
  )

  return (
    <nav className="menu">
      {links}
    </nav>
  );
}

Menu.propTypes = {
  items: PropTypes.array,
};

Menu.defaultProps = {
  items: [],
};

export default Menu;
