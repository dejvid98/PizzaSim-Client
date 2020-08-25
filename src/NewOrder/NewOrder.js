// Libraries imports
import React from 'react';
import {
  DollarOutlined,
  ClockCircleOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';

// Relative imports
import styles from './NewOrder.module.scss';
import Navbar from '../Layout/Navbar';
import ingredients from './ingredients';

const NewOrder = () => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.heading}>
        <div className={styles.iconWrapper}>
          <p>Total</p>
          <DollarOutlined className={styles.moneyIcon} />
          <p>
            <span className={styles.value}>0 </span>$
          </p>
        </div>
        <div className={styles.iconWrapper}>
          <p>Time</p>
          <ClockCircleOutlined className={styles.timeIcon} />
          <p>
            <span className={styles.value}>0 </span>s
          </p>
        </div>

        <div className={styles.iconWrapper}>
          <p>Quantity</p>
          <DatabaseOutlined className={styles.qtyIcon} />
          <p>
            <span className={styles.value}>1</span>
          </p>
        </div>
      </div>
      <div className={styles.ingWrapper}>
        {ingredients.map((item) => (
          <div className={styles.ingredient}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewOrder;
