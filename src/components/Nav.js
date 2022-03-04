import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import NavIcon from '../Images/profile-icon.png';

const Nav = () => {
  const navItems = [
    {
      id: 0,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 1,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <header className="navbar">
      <div className="inside-nav">
      <h1 className='store-lg'>Bookstore CMS</h1>
      <div>
        <ul className="menulinks">
          {
                      navItems.map((navItems) => (
                        <li key={navItems.id}>
                          <NavLink to={navItems.path} className="menu-item">{navItems.text}</NavLink>
                        </li>
                      ))

                    }

        </ul>
      </div>
      </div>
      <img className="proficon" src={NavIcon} alt="Nav icon" />
      <Outlet />
    </header>
  );
};

export default Nav;
