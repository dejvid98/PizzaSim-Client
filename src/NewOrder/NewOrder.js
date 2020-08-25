// Libraries imports
import React, { useState, useEffect } from 'react';
import {
  DollarOutlined,
  ClockCircleOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';

// Relative imports
import styles from './NewOrder.module.scss';
import Navbar from '../Layout/Navbar';
import store from '../store/store';
import Size from './Size';
import Ing from './Ing';
import Quantity from './Quantity';

const NewOrder = () => {
  const [orderStep, setOrderStep] = useState('size');
  const [total, setTotal] = useState(0);
  const [ing, setIng] = useState('');
  const [time, setTime] = useState(0);
  const [qty, setQty] = useState(1);

  const updateState = (storeState) => {
    const { userCart } = storeState;
    setOrderStep(userCart.step);
    setTotal(userCart.total);
    setTime(userCart.time);
    setIng(userCart.ing);
    setQty(userCart.qty);
  };

  useEffect(() => {
    updateState(store.getState());
    store.subscribe(() => updateState(store.getState()));
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.heading}>
        <div className={styles.iconWrapper}>
          <p>Total</p>
          <DollarOutlined className={styles.moneyIcon} />
          <p>
            <span className={styles.value}>{total} </span>$
          </p>
        </div>
        <div className={styles.iconWrapper}>
          <p>Time</p>
          <ClockCircleOutlined className={styles.timeIcon} />
          <p>
            <span className={styles.value}>{time} </span>s
          </p>
        </div>

        <div className={styles.iconWrapper}>
          <p>Quantity</p>
          <DatabaseOutlined className={styles.qtyIcon} />
          <p>
            <span className={styles.value}>{qty}</span>
          </p>
        </div>
      </div>

      {orderStep === 'size' ? <Size /> : null}
      {orderStep === 'ing' ? <Ing ing={ing} /> : null}
      {orderStep === 'qty' ? <Quantity qty={qty} /> : null}
    </div>
  );
};

export default NewOrder;
