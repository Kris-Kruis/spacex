import React from 'react';

import './Header.css';
import Menu from '../Menu';
import { menuItems } from '../../assets/constants/menuItems';

function Header () {
  return (
    <header className="header">
        <div className="layout">
          <div className="content">
            <div className="header__logo">
              <a href="/" />
            </div>
            <div className="header__menu">
              <Menu items={menuItems} />
            </div>
          </div>
        </div>
    </header>
  );
}

export default Header;
