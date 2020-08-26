// Libraries imports
import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { Statistic, Button } from 'antd';
import { Link } from 'react-router-dom';

// Relative imports
import styles from './Timer.module.scss';
import store from '../store/store';
import { resetStore } from '../store/userCart';
import HTTP from '../Util/HTTP';

const OrderQueue = () => {
  const [deadline, setDeadline] = useState(new Date());
  const [position, setPosition] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const { Countdown } = Statistic;

  const cancelOrder = async () => {
    await HTTP.post('/order/delete', { id: store.getState().userCart.orderid });
    store.dispatch(resetStore({}));
  };

  useEffect(() => {
    const { ordersLeft, queueTime } = store.getState().userCart;
    setPosition(ordersLeft);
    if (ordersLeft === 1) setIsDisabled(true);
    setDeadline(Date.now() + queueTime * 1000);

    store.subscribe(() => {
      const { ordersLeft, queueTime } = store.getState().userCart;
      setPosition(ordersLeft);
      if (ordersLeft === 1) setIsDisabled(true);
      setDeadline(Date.now() + queueTime * 1000);
    });
  }, []);

  const onFinish = () => {
    setIsReady(true);
  };

  return (
    <div className={styles.container}>
      {isReady ? (
        <div className={styles.ready}>
          <h1>Your pizza is ready, enjoy!</h1>

          <img src='Pizza.svg' alt='Pizza illustration' />
        </div>
      ) : (
        <div className={styles.waiting}>
          <h3>Order successfully placed!</h3>
          <p>
            Your position in the queue <span>{position}</span>
          </p>
          <Countdown
            title='Pizza will be ready in'
            value={deadline}
            onFinish={onFinish}
          />
          <Loader
            type='Oval'
            color='#FF9A00'
            height={100}
            width={100}
            timeout={3000}
            className={styles.loader}
          />
          <Link to='/neworder'>
            <Button
              danger
              onClick={cancelOrder}
              className={styles.cancel}
              disabled={isDisabled}
            >
              Cancel Order
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderQueue;
