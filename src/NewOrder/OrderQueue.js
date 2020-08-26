// Libraries imports
import React, { useEffect } from 'react';
import { Button } from 'antd';
import io from 'socket.io-client';

// Relative imports
import styles from './OrderQueue.module.scss';
import store from '../store/store';
import HTTP from '../Util/HTTP';
import Timer from './Timer';
import {
  updateQueueTime,
  updateOrdersLeft,
  reduceQueueTime,
} from '../store/userCart';

const OrderQueue = () => {
  const socket = io.connect(`http://localhost:3033`);

  const cancelOrder = async () => {
    const resp = await HTTP.delete('/order', {
      id: store.getState().userCart.orderid,
    });
  };

  const updateQueue = (orders, startTime, timeTick, ordersLeft) => {
    const timeDiff = timeTick - (startTime - orders.queueTime);
    store.dispatch(updateQueueTime({ queueTime: timeDiff }));
    store.dispatch(updateOrdersLeft({ ordersLeft: ordersLeft - 1 }));
  };

  useEffect(() => {
    setInterval(() => {
      store.dispatch(reduceQueueTime({}));
    }, 1000);

    socket.on('orders', (orders) => {
      if (
        new Date(orders.orderDate) <
        new Date(store.getState().userCart.orderDate)
      ) {
        const { ordersLeft, queueTime, startTime } = store.getState().userCart;
        updateQueue(orders, startTime, queueTime, ordersLeft);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <h3>Order successfully placed!</h3>
      <Timer />
      <Button danger onClick={cancelOrder}>
        Cancel Order
      </Button>
    </div>
  );
};

export default OrderQueue;
