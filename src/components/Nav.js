import React from 'react';
import { NavLink } from 'react-router-dom';

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
      <h1>Bookstore CMS</h1>

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
    </header>
  );
};

export default Nav;
