import React from 'react';
import { Link } from 'react-router-dom';

import useUser from '../../../../hooks/useUser';

import './Header.scss';

const Header = () => {
  // const isLogged = false;
  const { isLogged, logout } = useUser();

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <header className="header">
      {isLogged ? (
        <Link to="/#" onClick={handleClick}>Logout</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </header>
  );
};

export default Header;
