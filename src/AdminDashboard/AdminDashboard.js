import React from 'react';
import Navbar from '../Layout/Navbar';
import styles from '../LandingPage/LandingPage.module.scss';
import OrdersList from '../LandingPage/OrdersList';

const AdminDashoard = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <OrdersList />
    </div>
  );
};

export default AdminDashoard;
