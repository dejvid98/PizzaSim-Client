// Libraries imports
import React, { useState, useEffect } from 'react';
import { Statistic } from 'antd';
import io from 'socket.io-client';

// Relative imports
import styles from './OrderQueue.module.scss';
import store from '../store/store';
import HTTP from '../Util/HTTP';
import { updateQueueTime, updateOrdersLeft } from '../store/userCart';

const OrderQueue = () => {
  const [deadline, setDeadline] = useState(Date.now());
  const [ordersState, setOrdersState] = useState(0);
  const [orderDateState, setOrderDateState] = useState(new Date());
  const [orderIdState, setOrderIdState] = useState('');
  const { Countdown } = Statistic;
  const socket = io.connect(`http://localhost:3033`);

  const cancelOrder = async () => {
    await HTTP.delete('/orders', { id: orderIdState });
  };

  useEffect(() => {
    const {
      queueTime,
      ordersLeft,
      orderDate,
      orderId,
    } = store.getState().userCart;
    setDeadline(Date.now() + queueTime * 1000);
    setOrdersState(ordersLeft);
    setOrderDateState(orderDate);
    setOrderIdState(orderId);

    socket.on('orders', (orders) => {
      if (new Date(orders.orderDate) < new Date(orderDateState)) {
        store.dispatch(
          updateQueueTime({
            queueTime: orders.queueTime,
          })
        );
      }
    });
  }, []);

  const onFinish = () => {
    console.log('finished!');
  };
  return (
    <div className={styles.container}>
      <h3>Order successfully placed!</h3>
      <p>
        Your place in the queue <span>{ordersState}</span>
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
