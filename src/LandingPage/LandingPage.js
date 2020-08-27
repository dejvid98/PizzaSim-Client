import React from 'react';
import Navbar from '../Layout/Navbar';
import styles from './LandingPage.module.scss';
import OrdersList from './OrdersList';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.firstOrders}>
        <OrdersList />
      </div>
    </div>
  );
};

export default LandingPage;
