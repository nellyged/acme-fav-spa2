import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ counts, history, location: { pathname } }) => {
  console.log(history);
  console.log(location);
  console.log(pathname);
  const links = [
    {
      title: 'Users',
      path: '/users',
    },
    {
      title: 'Things',
      path: '/things',
    },
  ];
  return (
    <ul className="nav nav-pills">
      {links.map(link => (
        <li key={link.path} className="nav-item">
          <Link
            to={link.path}
            className={`nav-link${link.path === pathname ? ' active' : ''}`}
          >{`${link.title} ${counts[link.path]}`}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
