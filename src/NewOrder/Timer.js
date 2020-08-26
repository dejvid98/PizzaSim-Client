// Libraries imports
import React, { useState, useEffect } from 'react';
import { Statistic } from 'antd';

// Relative imports
import styles from './OrderQueue.module.scss';
import store from '../store/store';

const OrderQueue = () => {
  const [deadline, setDeadline] = useState(new Date());
  const [position, setPosition] = useState(0);
  const { Countdown } = Statistic;

  useEffect(() => {
    const { ordersLeft, queueTime } = store.getState().userCart;
    setPosition(ordersLeft);
    setDeadline(Date.now() + queueTime * 1000);

    store.subscribe(() => {
      const { ordersLeft, queueTime } = store.getState().userCart;
      setPosition(ordersLeft);
      setDeadline(Date.now() + queueTime * 1000);
    });
  }, []);

  const onFinish = () => {
    console.log('finished!');
  };
  return (
    <div className={styles.container}>
      <p>
        Your position in the queue <span>{position}</span>
      </p>
      <Countdown
        title='Pizza will be ready in'
        value={deadline}
        onFinish={onFinish}
      />
    </div>
  );
};

export default OrderQueue;
