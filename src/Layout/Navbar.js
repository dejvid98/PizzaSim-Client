// Libraries imports
import React from 'react';

// Relative imports
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} to='/'>
        <img src='Logo.svg' alt='Pizza logo' />
      </Link>
      <Link to='admin' className={styles.adminLink}>
        Admin Dashboard
      </Link>
    </div>
  );
};

export default Navbar;
