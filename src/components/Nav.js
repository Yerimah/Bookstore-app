import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const NavItem = [
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
        <header className='navbar'>
            <h1>Bookstore CMS</h1>

            <div>
                <ul className='menulinks'> 
                    {
                      links.map((link) =>(
                        <li key={link.id}>
                          <NavLink to={link.path} className='menu-item'>{link.text}</NavLink>
                        </li>
                      ))
                        
                    }
                    
                </ul>
            </div>
        </header>
    );
};

export default Nav;