import React from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img src='Logo.svg' alt='Pizza logo' />
      <Link className={styles.adminLink}>Admin Dashboard</Link>
    </div>
  );
};

export default Navbar;
