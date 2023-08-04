// Navbar.js
import React from 'react';
import NavItem from './NavItem';
import { AiFillHome } from 'react-icons/ai';
import { ImBlog } from 'react-icons/im';

function Navbar({ isExpanded }) {
  const navConstants = [
    { name: 'Home', icon: <AiFillHome />, toRoute: '/' },
    { name: 'Studio', icon: <ImBlog />, toRoute: '/create-post' },
  ];

  return (
    <nav>
      <ul>
        {navConstants.map((constant, index) => {
          return (
            <li key={index}>
              <NavItem closed={isExpanded} buttonData={constant} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
