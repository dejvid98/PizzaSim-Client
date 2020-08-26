// Libraries imports
import React, { useEffect } from 'react';
import io from 'socket.io-client';

// Relative imports
import styles from './OrderQueue.module.scss';
import store from '../store/store';
import Timer from './Timer';
import {
  updateQueueTime,
  updateOrdersLeft,
  reduceQueueTime,
} from '../store/userCart';

const OrderQueue = () => {
  const socket = io.connect(`http://localhost:3033`);

  const updateQueue = (orders, startTime, timeTick, ordersLeft) => {
    const timeDiff = timeTick - (startTime - orders.queueTime);
    store.dispatch(updateQueueTime({ queueTime: timeDiff }));
    store.dispatch(updateOrdersLeft({ ordersLeft: ordersLeft - 1 }));
  };

  useEffect(() => {
    const queueTicking = setInterval(() => {
      store.dispatch(reduceQueueTime({}));
    }, 1000);
    console.log('hii');
    socket.on('orders', (orders) => {
      if (
        new Date(orders.orderDate) <
        new Date(store.getState().userCart.orderDate)
      ) {
        const { ordersLeft, queueTime, startTime } = store.getState().userCart;
        updateQueue(orders, startTime, queueTime, ordersLeft);
      }
    });

    return function cleanup() {
      clearInterval(queueTicking);
    };
  });

  return (
    <div className={styles.container}>
      <Timer />
    </div>
  );
};

export default OrderQueue;
